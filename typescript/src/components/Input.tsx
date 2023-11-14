import React, { useState, useEffect } from 'react'
import AllTasks from './AllTasks'

const Input = () => {
  const [task, setTask] = useState<string>('')
  let [allTasks, setAllTasks] = useState<string[]>([])
  const [getEdit, setGetEdit] = useState<{ text: string; index: number | null }>({ text: '', index: null });
  const [isChecked, setIsChecked] = useState<string[]>([])

  useEffect(() => {
    if ('text' in getEdit) {
      const getVal: any = getEdit.text
      setTask(getVal)
    }
  }, [getEdit])

  const handleData = () => {
    const index = getEdit.index
    if (index !== null && task !== getEdit.text) {
      const updatedTasks = [...allTasks]
      updatedTasks.splice(index, 1, task)
      setAllTasks(updatedTasks)
    }
    else if (task === getEdit.text) {
      setTask('')
      return
    }
    else setAllTasks(prevTasks => [...prevTasks, task])

    setGetEdit({ text: '', index: null })
    setTask('')
  }

  const handleReset = () => {
    setAllTasks([])
    setTask('')
    setIsChecked([])
  }

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', justifyItems: 'center', alignItems: 'center', }}>
        <div>
          <label style={{ color: 'grey' }}>
            Add Task: <input value={task} onChange={e => setTask(e.target.value)} style={{ width: 390, height: 25, paddingLeft: 10 }} name="myInput" placeholder='Enter input' />
          </label>
        </div>
        <AllTasks 
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        allTasks={allTasks}
         setAllTasks={setAllTasks}
          setGetEdit={setGetEdit} />
        <div style={{ display: 'flex' }}>
          <button type='button' onClick={handleData} style={{ width: 100, marginTop: 30, fontSize: 20, fontWeight: '600', marginRight: 10, color: 'green', cursor: 'pointer' }}>
            {getEdit.index !== null ? 'Update' : 'Add'}
          </button>
          <button type='button' onClick={handleReset} style={{ width: 100, marginTop: 30, fontSize: 20, fontWeight: '600', color: 'red', cursor: 'pointer' }}>
            Reset
          </button>
        </div>
      </div>
    </>
  )
}

export default Input