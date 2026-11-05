async function getRenderedAt() {
  
  return new Date().getFullYear()
}


export function GetYear() {
  return (
    <>
      {getRenderedAt()}
    </>
  )
}