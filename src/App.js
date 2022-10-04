import { Popover } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <>
      <Popover
        as="header"
        className={({ open }) =>
          classNames(
            open ? "fixed inset-0 z-40 overflow-y-auto" : "",
            "bg-white shadow-sm lg:static lg:overflow-y-visible h-12"
          )
        }
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="relative" style={{ textAlign: "-webkit-center" }}>
                <div>
                  <div className="items-center">
                    <img
                      className="block h-8 w-auto mt-2.5"
                      src="https://efishery.com/wp-content/uploads/2021/10/logo-retina-colored.png"
                      alt="Your Company"
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Popover>
    </>
  );
}
