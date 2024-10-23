import * as Input from '@/components/Input'
import {
  Bold,
  CircleCheck,
  CloudUpload,
  File,
  Italic,
  Mail,
  User,
} from 'lucide-react'
export function MyDetails() {
  return (
    <div className="mt-6 flex flex-col">
      <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
        <div className="space-y-1">
          <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
          <span className="text-sm text-zinc-500">
            Update your photo and personal details here.
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            form="settings"
            className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
          >
            Save
          </button>
        </div>
      </div>
      <form
        id="settings"
        className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
      >
        <div className="grid grid-cols-form gap-3">
          <label
            htmlFor="firstName"
            className="text-sm font-medium text-zinc-700"
          >
            Name
          </label>
          <div className="grid grid-cols-2 gap-6">
            <Input.Root>
              <Input.Control id="firstName" defaultValue="Caroll" />
            </Input.Root>
            <Input.Root>
              <Input.Control defaultValue="Carvalho" />
            </Input.Root>
          </div>
        </div>
        <div className="grid grid-cols-form gap-3 pt-5">
          <label htmlFor="email" className="text-sm font-medium text-zinc-700">
            Email address
          </label>
          <Input.Root>
            <Input.Prefix>
              <Mail className="size-5" />
            </Input.Prefix>
            <Input.Control
              id="email"
              type="email"
              defaultValue="c.carvalho@xcarena-dev.com.br"
            />
          </Input.Root>
        </div>
        <div className="grid grid-cols-form gap-3 pt-5">
          <div className="flex flex-col space-y-1">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              Your photo
            </label>
            <span className="text-sm text-zinc-500">
              This will be displayed on your profile.
            </span>
          </div>
          <div className="flex gap-5">
            <div className="flex size-16 items-center justify-center rounded-full bg-violet-50">
              <User className="size-8 text-violet-600" />
            </div>
            <div className="flex h-32 w-full flex-col items-center justify-center rounded-lg border border-zinc-200">
              <div className="mb-2 flex size-10 items-center justify-center gap-5 rounded-full bg-zinc-100 ring-4 ring-zinc-50">
                <CloudUpload className="size-5 text-zinc-600" />
              </div>
              <div>
                <button
                  type="button"
                  className="text-sm font-semibold text-violet-700"
                >
                  Click to upload
                </button>
                <span className="text-sm text-zinc-500"> or drag and drop</span>
              </div>
              <span className="text-xs text-zinc-500">
                SVG, PNG, JPG or GIF (max. 800x400px)
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-form gap-3 pt-5">
          <label htmlFor="role" className="text-sm font-medium text-zinc-700">
            Role
          </label>
          <Input.Root>
            <Input.Control
              id="role"
              type="text"
              defaultValue="Product Designer"
            />
          </Input.Root>
        </div>
        <div className="grid grid-cols-form gap-3 pt-5">
          <label
            htmlFor="country"
            className="text-sm font-medium text-zinc-700"
          >
            Country
          </label>
          <Input.Root>
            <Input.Control id="country" type="" defaultValue="United States" />
          </Input.Root>
        </div>
        <div className="grid grid-cols-form gap-3 pt-5">
          <label
            htmlFor="timezone"
            className="text-sm font-medium text-zinc-700"
          >
            Timezone
          </label>
          <Input.Root>
            <Input.Control id="timezone" type="" defaultValue="PST" />
          </Input.Root>
        </div>
        <div className="grid grid-cols-form gap-3 pt-5">
          <div className="flex flex-col space-y-1">
            <label htmlFor="" className="text-sm font-medium text-zinc-700">
              Bio
            </label>
            <span className="text-sm text-zinc-500">
              Write a short introduction.
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <div className="w-1/3">
                <Input.Root>
                  <Input.Control defaultValue="Normal text"></Input.Control>
                </Input.Root>
              </div>
              <div className="flex gap-2">
                <Bold className="size-5 text-zinc-400" />
                <Italic className="size-5 text-zinc-400" />
              </div>
            </div>
            <div>
              <textarea
                defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialize in UX/UI design, brand strategy, and Web development."
                className="flex h-32 w-full flex-col items-center justify-center rounded-lg border border-zinc-200 p-4 text-zinc-900"
              ></textarea>
              <span className="mt-1.5 text-sm text-zinc-500">
                275 characters left
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-form gap-3 pt-5">
          <div className="flex flex-col space-y-1">
            <label htmlFor="" className="text-sm font-medium text-zinc-700">
              Portfolio projects
            </label>
            <span className="text-sm text-zinc-500">
              Share a few snippets of your work.
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex h-32 w-full flex-col items-center justify-center rounded-lg border border-zinc-200">
              <div className="mb-2 flex size-10 items-center justify-center gap-5 rounded-full bg-zinc-100 ring-4 ring-zinc-50">
                <CloudUpload className="size-5 text-zinc-600" />
              </div>
              <div>
                <button
                  type="button"
                  className="text-sm font-semibold text-violet-700"
                >
                  Click to upload
                </button>
                <span className="text-sm text-zinc-500"> or drag and drop</span>
              </div>
              <span className="text-xs text-zinc-500">
                SVG, PNG, JPG or GIF (max. 800x400px)
              </span>
            </div>
            <div className="grid h-24 w-full grid-cols-card rounded-lg border border-violet-500 p-4">
              <div className="mb-2 flex size-7 items-center justify-center gap-5 rounded-full bg-violet-100 ring-4 ring-violet-50">
                <File className="size-4 text-violet-600" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-zinc-700">
                  Tech design requirements.pdf
                </span>
                <span className="text-sm text-zinc-500">200 KB</span>
                <div className="mt-2 flex items-center gap-1">
                  <div className="h-2 w-full rounded-full bg-violet-100">
                    <div className="h-2 w-full rounded-full bg-violet-600" />
                  </div>
                  <span className="text-sm font-medium text-zinc-700">
                    100%
                  </span>
                </div>
              </div>
              <CircleCheck className="size-4 rounded-full bg-violet-600 text-white" />
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
