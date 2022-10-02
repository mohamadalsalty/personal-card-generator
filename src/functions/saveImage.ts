import html2canvas from 'html2canvas'
import { FormEvent } from 'react'

const saveImage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const el = document?.querySelector(".card") as HTMLElement
    html2canvas(el,
        {
            allowTaint: true,
            useCORS: true
        }
    ).then(function (canvas) {
        let image = canvas.toDataURL("image/png", 1.0)
        let fakeLink: HTMLAnchorElement = window.document.createElement("a")
        fakeLink.download = 'card.png'
        fakeLink.href = image
        fakeLink.click()
        document.body.removeChild(fakeLink)
        fakeLink.remove()

    })

}
export default saveImage