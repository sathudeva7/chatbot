import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import {
  BoltIcon,
  ShareIcon,
  DocumentDuplicateIcon,
  ChatBubbleLeftIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Design', href: '#', icon: FingerPrintIcon, current: true },
  { name: 'Flow', href: '#', icon: ShareIcon, current: false },
  { name: 'Popups', href: '#', icon: ChatBubbleLeftIcon, current: false },
  { name: 'Train AI', href: '#', icon: BoltIcon, current: false },
  { name: 'Settings', href: '#', icon: Cog6ToothIcon, current: false },
  { name: 'xRM', href: '#', icon: DocumentDuplicateIcon, current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Verticalbar() {
  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
     
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  {!item.children ? (
				<div>
                    <a
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-50' : 'hover:bg-gray-50',
                        'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700',
                      )}
                    >
                      <item.icon aria-hidden="true" className="h-6 w-6 shrink-0 text-gray-400" />
                      
                    </a>
				<div style={{fontSize: '12px'}}>{item.name}</div>
				</div>
                  ) : (
                    <Disclosure as="div">
                      <DisclosureButton
                        className={classNames(
                          item.current ? 'bg-gray-50' : 'hover:bg-gray-50',
                          'group flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm font-semibold leading-6 text-gray-700',
                        )}
                      >
                        <item.icon aria-hidden="true" className="h-6 w-6 shrink-0 text-gray-400" />
                        {item.name}
                        <ChevronRightIcon
                          aria-hidden="true"
                          className="ml-auto h-5 w-5 shrink-0 text-gray-400 group-data-[open]:rotate-90 group-data-[open]:text-gray-500"
                        />
                      </DisclosureButton>
                      <DisclosurePanel as="ul" className="mt-1 px-2">
                        {item.children.map((subItem) => (
                          <li key={subItem.name}>
                            {/* 44px */}
                            <DisclosureButton
                              as="a"
                              href={subItem.href}
                              className={classNames(
                                subItem.current ? 'bg-gray-50' : 'hover:bg-gray-50',
                                'block rounded-md py-2 pl-9 pr-2 text-sm leading-6 text-gray-700',
                              )}
                            >
                              {subItem.name}
                            </DisclosureButton>
                          </li>
                        ))}
                      </DisclosurePanel>
                    </Disclosure>
                  )}
                </li>
              ))}
            </ul>
          </li>
          
        </ul>
      </nav>
    </div>
  )
}
