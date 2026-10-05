import { MorphingText } from "./ui/morphing-text"

const texts = [
  "Hello",
  "Morphing",
  "Text",
  "Animation",
  "React",
  "Component",
  "Smooth",
  "Transition",
  "Engaging",
]

export function MorphingTextDemo() {
  return <div>
    <div className="flex flex-row">

    <p>Holaaa
        <MorphingText texts={texts} />
    </p>
    </div>
    </div>
}
