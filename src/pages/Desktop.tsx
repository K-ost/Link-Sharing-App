import Btn from "../components/Forms/Btn"
import FormField from "../components/Forms/FormField"
import Empty from "../components/Empty"
import Content from "../components/Content"
import { useFieldArray, useForm } from "react-hook-form"
import { nanoid } from "nanoid"
import { useLinks } from "../store/useLinks"
import { linksOptions } from "../helpers"

const Desktop: React.FC = () => {
  const { links, removeLink, setLink } = useLinks()

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
    <Content>
      <h1>Customize your links</h1>
      <article className="article">Add/edit/remove links below and then share all your profiles with the world!</article>

      <form onSubmit={handleSubmit(addLink)}>
        
        <FormField>
          <Btn text="+ Add new link" bordered expand handler={() => append({ id: nanoid(), platform: "", link: "" })} />
        </FormField>

        <ul>
          {fields.map((item, index) => (
            <li key={item.id}>
              <select {...register(`links.${index}.platform`)}>
                {linksOptions.map(option => (
                  <option key={option.id} value={option.value}>{option.label}</option>
                ))}
              </select>
              <input {...register(`links.${index}.link`, { required: 'dsadasda' })} />
              <button type="button" onClick={() => remove(Number(item.id))}>Delete</button>
            </li>
          ))}
        </ul>

        <Btn type="submit" text="Save" />

      </form>

      <Empty />

    </Content>
  )
}

export default Desktop
