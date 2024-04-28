export function wait(ms: number): Promise<unknown> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

export function scrollToLastMessage() {
  const messages = [...document.querySelectorAll('#app-messages__item') as any]
  const firstElement = messages[messages.length - 1]
  if(!firstElement) return
  firstElement.scrollIntoView({
    behavior: "smooth"
  })
}