export const getDirectoriesDetails = async (directoryId) => {
  const hostUrl = process.env.REACT_APP_HOST_URL
  const response = await fetch(directoryId ? `${hostUrl}/${directoryId}` : hostUrl)
  const data = await response.json()
  const {id, name, files, directories} = data
  return {
    id,
    name,
    contents: [
      ...directories.map(directory => ({
        ...directory,
        type: 'directory'
      })),
      ...files.map(file => ({
        ...file,
        type: 'file'
      })),
    ]
  }
}
