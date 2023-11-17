import Btn from "../components/Forms/Btn"
import FormField from "../components/Forms/FormField"
import Empty from "../components/Empty"
import Content from "../components/Content"
import { useFieldArray, useForm } from "react-hook-form"
import { nanoid } from "nanoid"
import { useLinks } from "../store/useLinks"
import { linksOptions } from "../helpers"

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

        <ul>
          {fields.map((item, index) => (
            <li key={item.id}>
              <p>Link #{index + 1}</p>
              <select {...register(`links.${index}.platform`)}>
                {linksOptions.map(option => (
                  <option key={option.id} value={option.value}>{option.label}</option>
                ))}
              </select>
              <input {...register(`links.${index}.link`, {
                required: "Can't be empty",
                pattern: {
                  value: /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/,
                  message: "Please check the URL"
                }
              })} />
              { errors.links && <p>{errors.links[index]?.link?.message}</p> }
              <button type="button" onClick={() => remove(index)}>Delete</button>
            </li>
          ))}
        </ul>

      </form>

      {!links.length && <Empty />}

    </Content>
  )
}

export default Desktop
