import { Camera, ChevronLeft } from 'lucide-react'
import Link from 'next/link'

export default function NewMemory() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <Link
        href="/"
        className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100"
      >
        <ChevronLeft className="h-4 w-4" />
        Voltar à timeline
      </Link>
      <form>
        <div className="flex items-center gap-4">
          <label
            htmlFor="media"
            className="hover:text-100 flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
          >
            <Camera className="h-4 w-4" />
            Anexar midia
          </label>
          <label
            htmlFor="isPublic"
            className="hover:text-100 flex items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
          >
            <input
              type="checkbox"
              name="isPublic"
              id="isPublic"
              value="true"
              className="h-4 w-4 rounded border-gray-700 text-purple-500"
            />
            Tornar memória publica
          </label>
        </div>
        <input type="file" id="media" className="invisible h-0 w-0"></input>
        <textarea
          name="content"
          spellCheck={false}
          className="w-full flex-1 resize-none rounded border-0 bg-transparent p-0 text-lg leading-relaxed text-gray-100 placeholder:text-gray-400 focus:ring-0"
          placeholder="Fique livre para adicionar fotos, videos e relatos sobre essa experiência que vc quer lembrar para sempre"
        ></textarea>
      </form>
    </div>
  )
}
