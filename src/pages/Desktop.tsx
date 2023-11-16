import Btn from "../components/Forms/Btn"
import FormField from "../components/Forms/FormField"
import Empty from "../components/Empty"
import Content from "../components/Content"
import { useFieldArray, useForm } from "react-hook-form"
import { nanoid } from "nanoid"

const Desktop: React.FC = () => {

  const { control, register, handleSubmit, formState: { errors } } = useForm()
  const { fields, append, remove } = useFieldArray({
    control,
    name: "links"
  })

  console.log('errors', errors)

  return (
    <Content>
      <h1>Customize your links</h1>
      <article className="article">Add/edit/remove links below and then share all your profiles with the world!</article>

      <form onSubmit={handleSubmit(data => console.log(data))}>
        
        <FormField>
          <Btn text="+ Add new link" bordered expand handler={() => append({ id: nanoid(), platform: "", link: "" })} />
        </FormField>

        <ul>
          {fields.map((item, index) => (
            <li key={item.id}>
              <select {...register(`links.${index}.platform`)}>
                <option value="1">Select 1</option>
                <option value="2">Select 2</option>
                <option value="3">Select 3</option>
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
