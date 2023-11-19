import Btn from "../components/Forms/Btn"
import FormField from "../components/Forms/FormField"
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import Empty from "../components/Empty"
import Content from "../components/Content"
import { useFieldArray, useForm } from "react-hook-form"
import { nanoid } from "nanoid"
import { useLinks } from "../store/useLinks"
import { linksOptions, urlPattern } from "../helpers"
import LinkItem from "../components/LinkItem"
import { useEffect } from "react"

const Desktop: React.FC = () => {
  const { links, setLinks, onDragEnd } = useLinks()

  useEffect(() => {
    setValue('links', links)
  }, [links])

  // Form creating
  const { control, register, handleSubmit, formState: { errors }, setValue } = useForm({
    defaultValues: { links }
  })
  const { fields, prepend, remove } = useFieldArray({ control, name: "links" })

  // addLink
  const addLink = (data: any) => {
    setLinks(data.links)
  }

  // dragHandler
  const dragHandler = (result: any) => {
    onDragEnd(result, links)
  }
  

  return (
    <Content btn={<Btn text="Save" type="submit" handler={handleSubmit(addLink)} />}>
      <h1>Customize your links</h1>
      <article className="article">Add/edit/remove links below and then share all your profiles with the world!</article>

      <form>

        <FormField>
          <Btn text="+ Add new link" bordered expand handler={() => prepend({ id: nanoid(), platform: linksOptions[0].value, link: "" })} />
        </FormField>

        <DragDropContext onDragEnd={dragHandler}>
          <Droppable droppableId="droppable">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {fields.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        style={{marginBottom: 'var(--gap)', ...provided.draggableProps.style}}
                      >
                        <LinkItem
                          key={item.id}
                          index={index}
                          handlerSelect={register(`links.${index}.platform`)}
                          over={snapshot.isDragging}
                          handlerInput={register(`links.${index}.link`, {
                            required: "Can't be empty",
                            pattern: { value: urlPattern, message: "Please check the URL" }
                          })}
                          error={errors.links && errors.links[index]?.link?.message}
                          remove={remove}
                          drag={provided.dragHandleProps}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>

      </form>

      {!fields.length && <Empty />}

    </Content>
  )
}

export default Desktop
