import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../assets/logo/logo.svg'

const navigation = [
  { name: 'HOME', href: '/' },
  { name: 'PROGRAMMES', href: '#' },
  { name: 'ABOUT US', href: '/about' }, // Updated href
  { name: 'WALL OF FAME', href: '#' },
]

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
      <header className="absolute inset-x-0 top-0 z-50 bg-white">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Techpye</span>
              <img
                className="w-auto h-8"
                src={logo}
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-purple"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              item.name === 'PROGRAMMES' ? (
                <div key={item.name} className="relative group">
                  <a href={item.href} className="text-sm font-semibold leading-6 text-purple-dark flex items-center">
                    {item.name}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </a>
                  <div className="absolute left-0 hidden w-48 mt-2 bg-white border border-gray-200 rounded-md shadow-lg group-hover:block">
                    <a href="#" className="block px-4 py-2 text-sm font-semibold leading-6 text-purple-dark hover:bg-gray-100">The School of Data</a>
                    <a href="#" className="block px-4 py-2 text-sm font-semibold leading-6 text-purple-dark hover:bg-gray-100">The School of Design</a>
                    <a href="#" className="block px-4 py-2 text-sm font-semibold leading-6 text-purple-dark hover:bg-gray-100">The School of Management</a>
                  </div>
                </div>
              ) : (
                <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-purple-dark">
                  {item.name}
                </a>
              )
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-xl font-semibold leading-6 text-purple-dark flex items-center">
            Login     
          </a>
          <span className="mx-6 text-4xl">|</span> 
            <a href="#" className="px-2.5 py-2 text-sm font-semibold leading-6 border-t-purple-dark border-b-red border-l-light-blue border-r-light-blue text-purple-dark hover:text-white hover:bg-purple-dark">
              GET INVOLVED <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="w-auto h-8"
                  src={logo}
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-purple"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
            <div className="flow-root mt-6">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="py-6 space-y-2">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 rounded-lg text-purple-dark hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-purple-dark hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
  )
}

export default NavBar