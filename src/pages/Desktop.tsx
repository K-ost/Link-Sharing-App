import Btn from "../components/Forms/Btn"
import FormField from "../components/Forms/FormField"
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import Empty from "../components/Empty"
import Content from "../components/Content"
import { Controller, useFieldArray, useForm } from "react-hook-form"
import { nanoid } from "nanoid"
import { linksOptions, urlPattern } from "../helpers"
import { ItemBox, ItemDelete, ItemName, ItemTop } from "../components/LinkItemStyles"
import { useEffect, useState } from "react"
import SelectBox from "../components/Forms/SelectBox"
import FormInput from "../components/Forms/FormInput"
import Template from "../components/Template"
import { useAuth } from "../store/useApp"
import { LinkType } from "../types"

const Desktop: React.FC = () => {
  const { updateLinks, auth } = useAuth()
  const [stateLinks, setStateLinks] = useState<LinkType[]>([])
  
  useEffect(() => {
    setStateLinks(auth!.links)
  }, [auth])

  useEffect(() => {
    setValue('links', stateLinks)
  }, [auth, stateLinks])

  // Form creating
  const { control, handleSubmit, formState: { errors }, setValue } = useForm({
    defaultValues: { links: stateLinks }
  })
  const { fields, append, remove } = useFieldArray({ control, name: "links" })

  // addLinks
  const addLinks = (data: any) => {
    updateLinks(data.links, auth?.id!)
  }

  // dragHandler
  const dragHandler = (result: any) => {
    if (!result.destination) return
    const copy = Array.from(fields)
    const [removed] = copy.splice(result.source.index, 1)
    copy.splice(result.destination.index, 0, removed)
    setStateLinks(copy)
  }
  

  return (
    <Template>
      <Content btn={<Btn text="Save" type="submit" handler={handleSubmit(addLinks)} />}>
        <h1>Customize your links</h1>
        <article className="article">Add/edit/remove links below and then share all your profiles with the world!</article>

        <form>

          <FormField>
            <Btn text="+ Add new link" bordered expand handler={() => append({
              id: nanoid(),
              platform: { value: linksOptions[0].value, label: linksOptions[0].label, icon: linksOptions[0].icon },
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
    </Template>
  )
}

export default Desktop
