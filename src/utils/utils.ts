export function wait(ms: number): Promise<number> {
  return new Promise<number>((resolve) => {
    setTimeout(resolve.bind(ms), ms)
  })
}

export function scrollByMessageContent(): number {
  const block = document.querySelector('#app-messages') as HTMLDivElement
  block.scrollTop = block.scrollHeight;
  return block.scrollTop
}