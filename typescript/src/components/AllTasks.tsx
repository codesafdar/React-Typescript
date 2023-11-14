import React, { memo, SetStateAction, Dispatch } from 'react'
import { FaTrash, FaEdit } from "react-icons/fa"

interface GetProps {
  allTasks: string[]
  setAllTasks: Dispatch<SetStateAction<string[]>>
  setGetEdit: Dispatch<SetStateAction<{ text: string; index: number | null }>>
  isChecked: string[]
  setIsChecked: Dispatch<SetStateAction<string[]>>
}

const AllTasks = memo(({ allTasks, isChecked, setIsChecked, setGetEdit, setAllTasks }: GetProps) => {

  // checkbox
  const handleCheckbox = (checkedItem: string) => {
    let newList: string[] = []

    if (isChecked.includes(checkedItem)) {
      let arr = isChecked.filter((res: string) => res !== checkedItem)
      newList = arr
      setIsChecked(arr)
    } else {
      const newArr = [...isChecked, checkedItem]
      newList = newArr
      setIsChecked(newArr)
    }

    const remainingTasks = allTasks.filter(item => !newList?.includes(item));
    let arr = [...newList, ...remainingTasks]
    setAllTasks(arr)
  }

  const handleChecked = (index: string) => {
    return isChecked.some((res) => res === index)
  }

  // edit value
  const handleEdit = (key: number) => {
    let matchItem = allTasks.filter((item, index) => {
      return index === key
    })
    setGetEdit({ text: matchItem[0], index: key })
  }

  // delete an entry
  const handleDelete = (index: number) => {
    const getAllTasks = [...allTasks]
    getAllTasks.splice(index, 1)
    setAllTasks(getAllTasks)
  }

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: 400, marginLeft: 70 }}>
        <ul>
          {allTasks.map((task, index) => {
            return (
              task &&
              <div style={{ display: 'flex', alignItems: 'center', marginTop: 15, justifyContent: 'space-between', width: 400 }} key={index}>
                <div style={{ display: 'flex' }}>
                  <input style={{ marginRight: 10 }}
                    type='checkbox'
                    checked={handleChecked(task)}
                    onChange={() => handleCheckbox(task)}
                  />
                  <ol style={{ textDecoration: handleChecked(task) ? 'line-through' : '' }}>{task}</ol>
                </div>
                <div style={{ display: 'flex' }}>
                  <div onClick={() => handleEdit(index)} style={{ color: 'green', cursor: 'pointer' }}><FaEdit /></div>
                  <div onClick={() => handleDelete(index)} style={{ color: 'red', marginLeft: 10, cursor: 'pointer' }}><FaTrash /></div>
                </div>
              </div>
            )
          })}
        </ul>
      </div>
    </>
  )
})

export default AllTasks