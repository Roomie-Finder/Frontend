export default function Footer() {
  return (
    <div className="grid m-10 gap-7 p-15 text-gray-500 bg-white/8 rounded-3xl mb-0">
      <div className="grid gap-2">
        <img
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
          className="h-8 w-auto"
        />
        <div>
          Making the world a better place through constructing elegant
          hierarchies.
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 pt-2 pb-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className=" grid gap-4">
            <div className="font-medium ">Solutions</div>
            <div className="-">Marketing</div>
            <div className="-">Analytics</div>
            <div className="-">Automation</div>
          </div>
          <div className="grid gap-2">
            <div className="font-medium">Solutions</div>
            <div className="-">Marketing</div>
            <div className="-">Analytics</div>
            <div className="-">Automation</div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="grid gap-2">
            <div className="font-medium">Solutions</div>
            <div className="-">Marketing</div>
            <div className="-">Analytics</div>
            <div className="-">Automation</div>
          </div>
          <div className="grid gap-2">
            <div className="font-medium">Solutions</div>
            <div className="-">Marketing</div>
            <div className="-">Analytics</div>
            <div className="-">Automation</div>
          </div>
        </div>
      </div>
      <div className="">
        <hr />
        <div className="mt-3">
          © 2026 Roomie-Finder, Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
}
