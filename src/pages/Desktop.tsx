import Btn from "../components/Forms/Btn"
import FormField from "../components/Forms/FormField"
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import Empty from "../components/Empty"
import Content from "../components/Content"
import { Controller, useFieldArray, useForm } from "react-hook-form"
import { nanoid } from "nanoid"
import { useLinks } from "../store/useLinks"
import { linksOptions, urlPattern } from "../helpers"
import { ItemBox, ItemDelete, ItemName, ItemTop } from "../components/LinkItemStyles"
import { useEffect } from "react"
import SelectBox from "../components/Forms/SelectBox"
import FormInput from "../components/Forms/FormInput"

const Desktop: React.FC = () => {
  const { links, setLinks, onDragEnd } = useLinks()

  useEffect(() => {
    setValue('links', links)
  }, [links])

  // Form creating
  const { control, handleSubmit, formState: { errors }, setValue } = useForm({
    defaultValues: { links }
  })
  const { fields, append, remove } = useFieldArray({ control, name: "links" })

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
          <Btn text="+ Add new link" bordered expand handler={() => append({
            id: nanoid(),
            platform: { value: linksOptions[0].value, label: linksOptions[0].label },
            link: ""
          })} />
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
                        <ItemBox $over={snapshot.isDragging} className="greybox" key={item.id}>
                          <ItemTop>
                            <ItemName {...provided.dragHandleProps}>Link #{index + 1}</ItemName>
                            <ItemDelete className="resetBtn" onClick={() => remove(index)}>Remove</ItemDelete>
                          </ItemTop>

                          <FormField label="Platform">
                            <Controller
                              control={control}
                              name={`links.${index}.platform`}
                              render={({ field }) => <SelectBox list={linksOptions} valid={field} />}
                            />
                          </FormField>

                          <FormField label="Link" className="last">
                            <Controller
                              control={control}
                              name={`links.${index}.link`}
                              render={({ field }) => (
                                <FormInput
                                  icon="link"
                                  valid={field}
                                  placeholder="e.g. https://www.github.com/johnappleseed"
                                  error={errors.links && errors.links[index]?.link?.message}
                                />
                              )}
                              rules={{ required: "Can't be empty", pattern: { value: urlPattern, message: "Please check the URL" } }}
                            />
                          </FormField>
                        </ItemBox>
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
