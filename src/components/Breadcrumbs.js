import React from 'react'

export default function Breadcrumbs({ directoryPath, setDirectory }) {
  const isLast = index => index === directoryPath.length - 1

  const onBreadcrumbsClick = (directory, i) => {
    if (isLast(i)) return
    setDirectory(directory, i)
  }

  const clickableBreadcrumb = {
    fontWeight: 700, 
    cursor: 'pointer',
  }

  return (
    <div>
      {directoryPath && directoryPath.map((directory, i) => (
        <span
          style={!isLast(i) ? clickableBreadcrumb : null}
          key={i}
          onClick={() => onBreadcrumbsClick(directory, i)}
        >
          {directory.name} 
          {i === directoryPath.length -1 ? '' : ' / '}
        </span>
      ))}
    </div>
  )
}
