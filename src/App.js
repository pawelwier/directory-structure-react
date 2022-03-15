import React, { useState, useEffect } from 'react';
import './App.css';
import { Breadcrumbs } from './components/Breadcrumbs';
import { FolderContents } from './components/FolderContents';
import { getDirectoriesDetails } from './controllers/directoriesController'

export function App() {
  const [directoryPath, setDirectoryPath] = useState([])
  const [directoryId, setDirectoryId] = useState(null)
  const [contents, setContents] = useState([])
  
  useEffect(async () => {
    const directory = await getDirectoriesDetails(directoryId)
    const {id, name, contents} = directory
    setContents(contents)
    addToDirectoryPath({
      id, 
      name,
    })
  }, [directoryId])

  const setCurrentDirectory = (item) => {
    setDirectoryId(Number(item.id))
  }

  const addToDirectoryPath = (directory) => {
    setDirectoryPath([
      ...directoryPath,
      directory
    ])
  }

  const onBreadcrumbsClick = (directory, i) => {
    setCurrentDirectory(directory)
    setDirectoryPath([...directoryPath.filter((directory, index) => index < i)])
  }

  return (
    <div className="App">
      <Breadcrumbs 
        directoryPath={directoryPath}
        setDirectory={onBreadcrumbsClick}
      />
      <FolderContents
        contents={contents}
        setCurrentDirectory={setCurrentDirectory}
        addToDirectoryPath={addToDirectoryPath}
      />
    </div>
  );
}
