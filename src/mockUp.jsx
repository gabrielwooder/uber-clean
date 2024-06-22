<>
  <body className="bg-gray-100 font-sans leading-normal tracking-normal flex flex-col min-h-screen">
    <nav className="bg-white shadow-lg border-gray-200 dark:bg-gray-900 dark:border-gray-700 sticky top-0" style={{ borderBottom: "1px solid rgba(156,163,175,0.25)" }}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <a href="https://selecthomecleaning.ca" className="flex items-center py-2 px-2 text-gray-700 hover:text-gray-900">
            <img src="https://selecthomecleaning.ca/wp-content/uploads/2022/09/SelectJanitorial_green_114.png" className="max-h-12" />
        </a>
        <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
            <span className="sr-only">Menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
          <ul className="flex flex-col font-medium p-4 md:p-0 mx-6 my-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <button id="previousOrdersLink" data-dropdown-toggle="previousOrder" className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                  <i className="iconoir-multiple-pages text-3xl"></i>
                  <p className="pl-2">Previous Orders</p>
                  <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                  </svg>
              </button>
                {/* Dropdown menu */}
                <div id="previousOrder" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">4th Jun 2024</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">26th May 2024</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">12th May 2024</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">All Orders</a>
                    </li>
                </ul>
              </div>
            </li>
            <li>
                <button id="accountLink" data-dropdown-toggle="accountNavbar" className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                    <img
                        src="https://media.licdn.com/dms/image/D5603AQHnf0ToeYUHcA/profile-displayphoto-shrink_400_400/0/1668450085242?e=1723680000&v=beta&t=F9lEczmhKSa2kjTuYt0iva4n57nd5oqqTBJRDs1mQOM"
                        className="rounded-full"
                        style={{ height: "32px", width: "32px" }}
                        alt=""
                        loading="lazy" />
                    <p className="pl-2">Marcus Swift</p>
                    <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                    </svg>
                </button>
                {/* Dropdown menu */}
                <div id="accountNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Account Details</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">General Instructions</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Communication</a>
                        </li>
                    </ul>
                    <div className="py-1">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                    </div>
                </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div  className="flex-grow">
      <div className="h-[15vw] mb-8 flex items-top shadow-lg" style="background: url(https://storage.googleapis.com/gen-atmedia/2/2015/04/52b8d4825906632e7b3252aad33f37de5e3a9581.jpeg); background-size: cover; background-position: 50% 55%" ></div>

      <div id="accordion-collapse" data-accordion="collapse" data-active-classes="header-active" data-inactive-classes="header-inactive">
        <div className="flex items-center justify-center flex-grow">
          <div className="bg-white shadow-lg rounded-lg max-w-screen-md w-full mb-4 overflow-hidden">
            <h1 className="text-2xl font-bold text-brand-green px-8 py-4" id="accordion-collapse-heading-1" data-accordion-target="#accordion-collapse-body-1" aria-controls="#accordion-collapse-body-1">
              Work Order
              <span className="text-xs text-gray-400 font-normal float-right mt-2 hide-when-active">Hours: 4h, Date: 12/06/2024</span>
            </h1>
            <form id="accordion-collapse-body-1" className="hidden px-8 py-4" >
              <div className="flex flex-wrap">
                <div className="mr-8">
                  <label for="hours" className="block text-gray-400 mb-2 font-medium">Number of Hours</label>
                  <input type="number" id="hours" className="max-w-20 p-2 border rounded" value="4">
                </div>
                <div className="">
                  <label for="date" className="block text-gray-400 mb-2 font-medium" >Select Date</label>
                  <input id="date" className="max-w-40 p-2 border rounded" datepicker value="12/06/2024">
                </div>
              </div>
              <button className="text-white p-2 px-8 mt-8 rounded font-semibold bg-brand-green" data-accordion-target="#accordion-collapse-body-2">Next</button>
            </form>
          </div>
        </div>
        <div className="flex items-center justify-center flex-grow">
          <div className="bg-white shadow-lg rounded-lg max-w-screen-md w-full mb-4 overflow-hidden">
            <h1 className="text-2xl font-bold text-brand-green hover:bg-gray-100 px-8 py-4 "id="accordion-collapse-heading-2" data-accordion-target="#accordion-collapse-body-2" aria-controls="#accordion-collapse-body-2">
              Cleaning Tasks
              <span className="text-xs text-gray-400 font-normal float-right mt-2 hide-when-active">Tasks: Detail Kitchen, Clean Bathrooms & Custom Addition</span>
            </h1>
            <form id="accordion-collapse-body-2" className="hidden px-8 py-4" >
              <div className="mb-8">
                <label for="tasks" className="block text-gray-400 mb-2 font-medium">Priority Cleaning Tasks</label>
                <div className="flex flex-wrap">
                  <div>
                    <input type="checkbox" className="sr-only peer" name="priorityCleaning-DetailKitchen" id="priorityCleaning-DetailKitchen" checked>
                    <label className="flex items-center mr-4 mb-2 justify-center px-2.5 py-0.5 tag-not-selected rounded inline-flex peer-checked:hidden" for="priorityCleaning-DetailKitchen">
                      <i className="iconoir-circle mr-1"></i>
                      Detail Kitchen
                    </label>
                    <label className="flex items-center mr-4 mb-2 justify-center px-2.5 py-0.5 tag-selected rounded hidden peer-checked:inline-flex" for="priorityCleaning-DetailKitchen">
                      <i className="iconoir-check-circle-solid mr-1"></i>
                      Detail Kitchen
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" className="sr-only peer" name="priorityCleaning-CleanBathrooms" id="priorityCleaning-CleanBathrooms" checked>
                    <label className="flex items-center mr-4 mb-2 items-center justify-center px-2.5 py-0.5 tag-not-selected rounded inline-flex peer-checked:hidden" for="priorityCleaning-CleanBathrooms">
                      <i className="iconoir-circle mr-1"></i>
                      Clean Bathrooms
                    </label>
                    <label className="flex items-center mr-4 mb-2 items-center justify-center px-2.5 py-0.5 tag-selected rounded hidden peer-checked:inline-flex" for="priorityCleaning-CleanBathrooms">
                      <i className="iconoir-check-circle-solid mr-1"></i>
                      Clean Bathrooms
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" className="sr-only peer" name="priorityCleaning-AttendToFloors" id="priorityCleaning-AttendToFloors">
                    <label className="flex items-center mr-4 mb-2 items-center justify-center px-2.5 py-0.5 tag-not-selected rounded inline-flex peer-checked:hidden" for="priorityCleaning-AttendToFloors">
                      <i className="iconoir-circle mr-1"></i>
                      Attend to Floors
                    </label>
                    <label className="flex items-center mr-4 mb-2 items-center justify-center px-2.5 py-0.5 tag-selected rounded hidden peer-checked:inline-flex" for="priorityCleaning-AttendToFloors">
                      <i className="iconoir-check-circle-solid mr-1"></i>
                      Attend to Floors
                    </label>
                  </div>
                </div>
                <input type="text" className="max-w-40 px-2.5 py-0.5 border rounded" name="priorityCleaning-NewTask" id="priorityCleaning-NewTask" placeholder="New Task...">
              </div>
              <div className="">
                <label for="tasks" className="block text-gray-400 mb-2 font-medium">In Remaining Time</label>
                <div className="flex flex-wrap">
                  <div>
                    <input type="checkbox" className="sr-only peer" name="remainingTime-DustThroughout" id="remainingTime-DustThroughout">
                    <label className="flex items-center mr-4 mb-2 items-center justify-center px-2.5 py-0.5 tag-not-selected rounded inline-flex peer-checked:hidden" for="remainingTime-DustThroughout">
                      <i className="iconoir-circle mr-1"></i>
                      Dust Throughout
                    </label>
                    <label className="flex items-center mr-4 mb-2 items-center justify-center px-2.5 py-0.5 tag-selected rounded hidden peer-checked:inline-flex" for="remainingTime-DustThroughout">
                      <i className="iconoir-check-circle-solid mr-1"></i>
                      Dust Throughout
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" className="sr-only peer" name="remainingTime-CustomAddition" id="remainingTime-CustomAddition" checked>
                    <label className="flex items-center mr-4 mb-2 items-center justify-center px-2.5 py-0.5 tag-not-selected rounded inline-flex peer-checked:hidden" for="remainingTime-CustomAddition">
                      <i className="iconoir-circle mr-1"></i>
                      Dust Throughout
                    </label>
                    <label className="flex items-center mr-4 mb-2 items-center justify-center px-2.5 py-0.5 tag-selected rounded hidden peer-checked:inline-flex" for="remainingTime-CustomAddition">
                      <i className="iconoir-check-circle-solid mr-1"></i>
                      Custom Addition
                    </label>
                  </div>
                </div>
                <input type="text" className="max-w-40 px-2.5 py-0.5 border rounded" name="remainingTime-NewTask" id="remainingTime-NewTask" placeholder="New Task...">
              </div>
              <button className="text-white p-2 px-8 mt-8 rounded font-semibold bg-brand-green" data-accordion-target="#accordion-collapse-body-3">Next</button>
            </form>
          </div>
        </div>
      
        <div className="flex items-center justify-center flex-grow">
          <div className="bg-white shadow-lg rounded-lg max-w-screen-md w-full mb-4 overflow-hidden">
            <h1 className="text-2xl font-bold text-brand-green hover:bg-gray-100 px-8 py-4" id="accordion-collapse-heading-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="true" aria-controls="#accordion-collapse-body-3">
              Extra Services
              <span className="text-xs text-gray-400 font-normal float-right mt-2 hide-when-active">Services: Provide Equipment</span>
            </h1>
            <form id="accordion-collapse-body-3" className="px-8 py-4">
              <div className="">
                <div className="flex flex-wrap">
                  <div>
                    <input type="checkbox" className="sr-only peer" name="extraProvideEquipment" id="extraProvideEquipment" checked>
                    <label className="items-center mr-4 mb-2 items-center justify-center px-2.5 py-0.5 tag-not-selected rounded block peer-checked:hidden" for="extraProvideEquipment">
                      <span className="block">
                        <i className="iconoir-circle mr-1"></i>
                        Provide Equipment (+$30)
                      </span>
                      <span className="block text-xs italic">Here is some additional infomation about what this service entails</span>
                    </label>
                    <label className="items-center mr-4 mb-2 items-center justify-center px-2.5 py-0.5 tag-selected rounded hidden peer-checked:block" for="extraProvideEquipment">
                      <span className="block">
                        <i className="iconoir-check-circle-solid mr-1"></i>
                        Provide Equipment (+$30)
                      </span>
                      <span className="block text-xs italic">Here is some additional infomation about what this service entails</span>
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" className="sr-only peer" name="extraGardening" id="extraGardening">
                    <label className="items-center mr-4 mb-2 items-center justify-center px-2.5 py-0.5 tag-not-selected rounded block peer-checked:hidden" for="extraGardening">
                      <span className="block">
                        <i className="iconoir-circle mr-1"></i>
                        Request Quote for Lawn Care/Gardening Services
                      </span>
                      <span className="block text-xs italic">Some other infomation is here, this is a great option!</span>
                    </label>
                    <label className="items-center mr-4 mb-2 items-center justify-center px-2.5 py-0.5 tag-selected rounded hidden peer-checked:block" for="extraGardening">
                      <span className="block">
                        <i className="iconoir-check-circle-solid mr-1"></i>
                        Request Quote for Lawn Care/Gardening Services
                      </span>
                      <span className="block text-xs italic">Some other infomation is here, this is a great option!</span>
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" className="sr-only peer" name="extraCarpetCleaning" id="extraCarpetCleaning">
                    <label className="items-center mr-4 mb-2 items-center justify-center px-2.5 py-0.5 tag-not-selected rounded block peer-checked:hidden" for="extraCarpetCleaning">
                      <span className="block">
                        <i className="iconoir-circle mr-1"></i>
                        Request Quote for Carpet Cleaning
                      </span>
                      <span className="block text-xs italic">There's also lots of reasons to pick this option</span>
                    </label>
                    <label className="items-center mr-4 mb-2 items-center justify-center px-2.5 py-0.5 tag-selected rounded hidden peer-checked:block" for="extraCarpetCleaning">
                      <span className="block">
                        <i className="iconoir-check-circle-solid mr-1"></i>
                        Request Quote for Carpet Cleaning
                      </span>
                      <span className="block text-xs italic">There's also lots of reasons to pick this option</span>
                    </label>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <footer className="bg-white shadow-lg mt-4 md:sticky md:bottom-0 md:left-0 md:right-0 flex items-center justify-center" style={{ borderTop: "1px solid rgba(156,163,175,0.25)" }}>
        <div className="p-8 md:py-8 md:px-0 max-w-screen-md w-full">
            <div className="flex justify-between">
                <div>
                    <p className="text-lg font-semibold">Total Price: $157.50</p>
                    <p className="text-xs text-gray-400">Cleaning: $120.00, Provide Equipment: $30.00, GST: $7.50</p>
                </div>
                <div className="md:flex items-center space-x-1">
                    <button type="submit" className="w-full text-white p-2 px-8 rounded font-semibold bg-brand-green">Book Cleaning</button>
                </div>
            </div>
        </div>
    </footer>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
  </body>
</>