import Btn from "../components/Forms/Btn"
import FormField from "../components/Forms/FormField"
import Empty from "../components/Empty"
import Content from "../components/Content"
import { useFieldArray, useForm } from "react-hook-form"
import { nanoid } from "nanoid"
import { useLinks } from "../store/useLinks"
import { linksOptions, urlPattern } from "../helpers"
import LinkItem from "../components/LinkItem"

const Desktop: React.FC = () => {
  const { links, setLink } = useLinks()

  const { control, register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      links
    }
  })
  const { fields, append, remove } = useFieldArray({
    control,
    name: "links"
  })

  // addLink
  const addLink = (data: any) => {
    setLink(data.links)
  }
  

  return (
    <Content btn={<Btn text="Save" type="submit" handler={handleSubmit(addLink)} />}>
      <h1>Customize your links</h1>
      <article className="article">Add/edit/remove links below and then share all your profiles with the world!</article>

      <form>

        <FormField>
          <Btn text="+ Add new link" bordered expand handler={() => append({ id: nanoid(), platform: linksOptions[0].value, link: "" })} />
        </FormField>

        {fields.map((item, index) => (
          <LinkItem
            key={item.id}
            index={index}
            handlerSelect={register(`links.${index}.platform`)}
            handlerInput={register(`links.${index}.link`, {
              required: "Can't be empty",
              pattern: {
                value: urlPattern,
                message: "Please check the URL"
              }
            })}
            error={errors.links && errors.links[index]?.link?.message}
            remove={remove}
          />
        ))}

      </form>

      {!fields.length && <Empty />}

    </Content>
  )
}

export default Desktop
