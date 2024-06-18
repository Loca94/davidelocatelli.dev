import { ComponentPropsWithoutRef } from 'react';

function Logo(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 15.54C0 15.2639 0.223858 15.04 0.5 15.04H15.699C15.9751 15.04 16.199 15.2639 16.199 15.54V30.5201C16.199 30.7962 16.4228 31.0201 16.699 31.0201H31.4601C31.7363 31.0201 31.9601 31.244 31.9601 31.5201V46.5002C31.9601 46.7763 31.7363 47.0002 31.4601 47.0002H0.5C0.223857 47.0002 0 46.7763 0 46.5002V15.54Z"
        fill="url(#gray-green-bracket)"
      />
      <path
        d="M49.6914 34.46C49.6914 34.7361 49.4675 34.96 49.1914 34.96H33.9924C33.7163 34.96 33.4924 34.7361 33.4924 34.46V19.4799C33.4924 19.2038 33.2686 18.9799 32.9924 18.9799H18.2313C17.9551 18.9799 17.7313 18.756 17.7313 18.4799V3.49984C17.7313 3.2237 17.9551 2.99984 18.2313 2.99984H49.1914C49.4675 2.99984 49.6914 3.2237 49.6914 3.49984V34.46Z"
        fill="url(#white-bracket)"
      />
      <defs>
        <linearGradient
          id="gray-green-bracket"
          x1="9"
          y1="31"
          x2="9"
          y2="15"
          gradientUnits="userSpaceOnUse"
        >
          <stop className="transition-all duration-300 stop-color-gray group-hover:stop-color-emerald" />
          <stop
            className="transition-all duration-300 stop-color-gray group-hover:stop-color-emerald"
            offset="1"
            stopOpacity="0"
          />
        </linearGradient>
        <linearGradient
          id="white-bracket"
          x1="45"
          y1="35"
          x2="45"
          y2="19"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E5E5E5" stopOpacity="0" />
          <stop offset="1" stopColor="#E5E5E5" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function AddressBookTabsIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm-16,72h16v48H192Zm16-16H192V48h16ZM48,48H176V208H48ZM208,208H192V168h16v40Zm-56.25-42a39.76,39.76,0,0,0-17.19-23.34,32,32,0,1,0-45.12,0A39.84,39.84,0,0,0,72.25,166a8,8,0,0,0,15.5,4c2.64-10.25,13.06-18,24.25-18s21.62,7.73,24.25,18a8,8,0,1,0,15.5-4ZM96,120a16,16,0,1,1,16,16A16,16,0,0,1,96,120Z"></path>
    </svg>
  );
}

function AirplaneIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M235.58,128.84,160,91.06V48a32,32,0,0,0-64,0V91.06L20.42,128.84A8,8,0,0,0,16,136v32a8,8,0,0,0,9.57,7.84L96,161.76v18.93L82.34,194.34A8,8,0,0,0,80,200v32a8,8,0,0,0,11,7.43l37-14.81,37,14.81A8,8,0,0,0,176,232V200a8,8,0,0,0-2.34-5.66L160,180.69V161.76l70.43,14.08A8,8,0,0,0,240,168V136A8,8,0,0,0,235.58,128.84ZM224,158.24l-70.43-14.08A8,8,0,0,0,144,152v32a8,8,0,0,0,2.34,5.66L160,203.31v16.87l-29-11.61a8,8,0,0,0-5.94,0L96,220.18V203.31l13.66-13.65A8,8,0,0,0,112,184V152a8,8,0,0,0-9.57-7.84L32,158.24v-17.3l75.58-37.78A8,8,0,0,0,112,96V48a16,16,0,0,1,32,0V96a8,8,0,0,0,4.42,7.16L224,140.94Z"></path>
    </svg>
  );
}

function AlarmIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M128,40a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,40Zm0,176a80,80,0,1,1,80-80A80.09,80.09,0,0,1,128,216ZM61.66,37.66l-32,32A8,8,0,0,1,18.34,58.34l32-32A8,8,0,0,1,61.66,37.66Zm176,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32l32,32A8,8,0,0,1,237.66,69.66ZM184,128a8,8,0,0,1,0,16H128a8,8,0,0,1-8-8V80a8,8,0,0,1,16,0v48Z"></path>
    </svg>
  );
}

function ArrowUpRightMiniIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      {...props}
    >
      <path
        fill-rule="evenodd"
        d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
        clip-rule="evenodd"
      />
    </svg>
  );
}

function AvocadoIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M128,112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,112Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,192Zm83-61.34L181.2,46.47a56,56,0,0,0-106-1.14h0l-29.51,83.5A88,88,0,1,0,211,130.66ZM128,232a72.05,72.05,0,0,1-67.33-97.57,1.34,1.34,0,0,1,.07-.18L90.28,50.66h0a40,40,0,0,1,75.74.88l.06.18L195.9,136A72.05,72.05,0,0,1,128,232Z"></path>
    </svg>
  );
}

function BarcodeIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M232,48V88a8,8,0,0,1-16,0V56H184a8,8,0,0,1,0-16h40A8,8,0,0,1,232,48ZM72,200H40V168a8,8,0,0,0-16,0v40a8,8,0,0,0,8,8H72a8,8,0,0,0,0-16Zm152-40a8,8,0,0,0-8,8v32H184a8,8,0,0,0,0,16h40a8,8,0,0,0,8-8V168A8,8,0,0,0,224,160ZM32,96a8,8,0,0,0,8-8V56H72a8,8,0,0,0,0-16H32a8,8,0,0,0-8,8V88A8,8,0,0,0,32,96ZM80,80a8,8,0,0,0-8,8v80a8,8,0,0,0,16,0V88A8,8,0,0,0,80,80Zm104,88V88a8,8,0,0,0-16,0v80a8,8,0,0,0,16,0ZM144,80a8,8,0,0,0-8,8v80a8,8,0,0,0,16,0V88A8,8,0,0,0,144,80Zm-32,0a8,8,0,0,0-8,8v80a8,8,0,0,0,16,0V88A8,8,0,0,0,112,80Z"></path>
    </svg>
  );
}

function BellIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
    </svg>
  );
}

function BluetoothIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M196.8,169.6,141.33,128,196.8,86.4a8,8,0,0,0,0-12.8l-64-48A8,8,0,0,0,120,32v80L68.8,73.6a8,8,0,0,0-9.6,12.8L114.67,128,59.2,169.6a8,8,0,1,0,9.6,12.8L120,144v80a8,8,0,0,0,12.8,6.4l64-48a8,8,0,0,0,0-12.8ZM136,48l42.67,32L136,112Zm0,160V144l42.67,32Z"></path>
    </svg>
  );
}

function BicycleIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M208,112a47.81,47.81,0,0,0-16.93,3.09L165.93,72H192a8,8,0,0,1,8,8,8,8,0,0,0,16,0,24,24,0,0,0-24-24H152a8,8,0,0,0-6.91,12l11.65,20H99.26L82.91,60A8,8,0,0,0,76,56H48a8,8,0,0,0,0,16H71.41L85.12,95.51,69.41,117.06a48.13,48.13,0,1,0,12.92,9.44l11.59-15.9L125.09,164A8,8,0,1,0,138.91,156l-30.32-52h57.48l11.19,19.17A48,48,0,1,0,208,112ZM80,160a32,32,0,1,1-20.21-29.74l-18.25,25a8,8,0,1,0,12.92,9.42l18.25-25A31.88,31.88,0,0,1,80,160Zm128,32a32,32,0,0,1-22.51-54.72L201.09,164A8,8,0,1,0,214.91,156L199.3,129.21A32,32,0,1,1,208,192Z"></path>
    </svg>
  );
}

function BoneIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M231.67,60.89a35.82,35.82,0,0,0-23.82-12.74,36,36,0,1,0-66.37,22.92.25.25,0,0,1,0,.08L71.17,141.51s0,0-.1,0a36,36,0,1,0-22.92,66.37,36,36,0,1,0,66.37-22.92.54.54,0,0,1,0-.08l70.35-70.36s0,0,.1,0a36,36,0,0,0,46.74-53.63ZM219.1,97.16a20,20,0,0,1-25.67,3.8,16,16,0,0,0-19.88,2.19l-70.4,70.4A16,16,0,0,0,101,193.43a20,20,0,1,1-36.75,7.5,8,8,0,0,0-7.91-9.24,8.5,8.5,0,0,0-1.23.1A20,20,0,1,1,62.57,155a16,16,0,0,0,19.88-2.19l70.4-70.4A16,16,0,0,0,155,62.57a20,20,0,1,1,36.75-7.5,8,8,0,0,0,9.14,9.14,20,20,0,0,1,18.17,33Z"></path>
    </svg>
  );
}

function BowlSteamIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M224,112H32a8,8,0,0,0-8,8,104.35,104.35,0,0,0,56,92.28V216a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16v-3.72A104.35,104.35,0,0,0,232,120,8,8,0,0,0,224,112Zm-59.34,88a8,8,0,0,0-4.66,7.27V216H96v-8.71A8,8,0,0,0,91.34,200a88.29,88.29,0,0,1-51-72H215.63A88.29,88.29,0,0,1,164.66,200ZM81.77,55c5.35-6.66,6.67-11.16,6.12-13.14-.42-1.49-2.41-2.26-2.43-2.26A8,8,0,0,1,88,24a8.11,8.11,0,0,1,2.38.36c1,.31,9.91,3.33,12.79,12.76,2.46,8.07-.55,17.45-8.94,27.89-5.35,6.66-6.67,11.16-6.12,13.14.42,1.49,2.37,2.24,2.39,2.25A8,8,0,0,1,88,96a8.11,8.11,0,0,1-2.38-.36c-1-.31-9.91-3.33-12.79-12.76C70.37,74.81,73.38,65.43,81.77,55Zm40,0c5.35-6.66,6.67-11.16,6.12-13.14-.42-1.49-2.41-2.26-2.43-2.26A8,8,0,0,1,128,24a8.11,8.11,0,0,1,2.38.36c1,.31,9.91,3.33,12.79,12.76,2.46,8.07-.55,17.45-8.94,27.89-5.35,6.66-6.67,11.16-6.12,13.14.42,1.49,2.37,2.24,2.39,2.25A8,8,0,0,1,128,96a8.11,8.11,0,0,1-2.38-.36c-1-.31-9.91-3.33-12.79-12.76C110.37,74.81,113.38,65.43,121.77,55Zm40,0c5.35-6.66,6.67-11.16,6.12-13.14-.42-1.49-2.41-2.26-2.43-2.26A8,8,0,0,1,168,24a8.11,8.11,0,0,1,2.38.36c1,.31,9.91,3.33,12.79,12.76,2.46,8.07-.55,17.45-8.94,27.89-5.35,6.66-6.67,11.16-6.12,13.14.42,1.49,2.37,2.24,2.39,2.25A8,8,0,0,1,168,96a8.11,8.11,0,0,1-2.38-.36c-1-.31-9.91-3.33-12.79-12.76C150.37,74.81,153.38,65.43,161.77,55Z"></path>
    </svg>
  );
}

function BrainIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M248,124a56.11,56.11,0,0,0-32-50.61V72a48,48,0,0,0-88-26.49A48,48,0,0,0,40,72v1.39a56,56,0,0,0,0,101.2V176a48,48,0,0,0,88,26.49A48,48,0,0,0,216,176v-1.41A56.09,56.09,0,0,0,248,124ZM88,208a32,32,0,0,1-31.81-28.56A55.87,55.87,0,0,0,64,180h8a8,8,0,0,0,0-16H64A40,40,0,0,1,50.67,86.27,8,8,0,0,0,56,78.73V72a32,32,0,0,1,64,0v68.26A47.8,47.8,0,0,0,88,128a8,8,0,0,0,0,16,32,32,0,0,1,0,64Zm104-44h-8a8,8,0,0,0,0,16h8a55.87,55.87,0,0,0,7.81-.56A32,32,0,1,1,168,144a8,8,0,0,0,0-16,47.8,47.8,0,0,0-32,12.26V72a32,32,0,0,1,64,0v6.73a8,8,0,0,0,5.33,7.54A40,40,0,0,1,192,164Zm16-52a8,8,0,0,1-8,8h-4a36,36,0,0,1-36-36V80a8,8,0,0,1,16,0v4a20,20,0,0,0,20,20h4A8,8,0,0,1,208,112ZM60,120H56a8,8,0,0,1,0-16h4A20,20,0,0,0,80,84V80a8,8,0,0,1,16,0v4A36,36,0,0,1,60,120Z"></path>
    </svg>
  );
}

function BroomIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M235.5,216.81c-22.56-11-35.5-34.58-35.5-64.8V134.73a15.94,15.94,0,0,0-10.09-14.87L165,110a8,8,0,0,1-4.48-10.34l21.32-53a28,28,0,0,0-16.1-37,28.14,28.14,0,0,0-35.82,16,.61.61,0,0,0,0,.12L108.9,79a8,8,0,0,1-10.37,4.49L73.11,73.14A15.89,15.89,0,0,0,55.74,76.8C34.68,98.45,24,123.75,24,152a111.45,111.45,0,0,0,31.18,77.53A8,8,0,0,0,61,232H232a8,8,0,0,0,3.5-15.19ZM67.14,88l25.41,10.3a24,24,0,0,0,31.23-13.45l21-53c2.56-6.11,9.47-9.27,15.43-7a12,12,0,0,1,6.88,15.92L145.69,93.76a24,24,0,0,0,13.43,31.14L184,134.73V152c0,.33,0,.66,0,1L55.77,101.71A108.84,108.84,0,0,1,67.14,88Zm48,128a87.53,87.53,0,0,1-24.34-42,8,8,0,0,0-15.49,4,105.16,105.16,0,0,0,18.36,38H64.44A95.54,95.54,0,0,1,40,152a85.9,85.9,0,0,1,7.73-36.29l137.8,55.12c3,18,10.56,33.48,21.89,45.16Z"></path>
    </svg>
  );
}

function BrowsersIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M216,40H72A16,16,0,0,0,56,56V72H40A16,16,0,0,0,24,88V200a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V184h16a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM184,88v16H40V88Zm0,112H40V120H184v80Zm32-32H200V88a16,16,0,0,0-16-16H72V56H216Z"></path>
    </svg>
  );
}

function CactusIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M216,208H168V184h4a68.07,68.07,0,0,0,68-68,28,28,0,0,0-56,0,12,12,0,0,1-12,12h-4V56a40,40,0,0,0-80,0V88H84A12,12,0,0,1,72,76a28,28,0,0,0-56,0,68.07,68.07,0,0,0,68,68h4v64H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM96,128H84A52.06,52.06,0,0,1,32,76a12,12,0,0,1,24,0,28,28,0,0,0,28,28H96a8,8,0,0,0,8-8V56a24,24,0,0,1,48,0v80a8,8,0,0,0,8,8h12a28,28,0,0,0,28-28,12,12,0,0,1,24,0,52.06,52.06,0,0,1-52,52H160a8,8,0,0,0-8,8v32H104V136A8,8,0,0,0,96,128Z"></path>
    </svg>
  );
}

function CameraIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M208,56H180.28L166.65,35.56A8,8,0,0,0,160,32H96a8,8,0,0,0-6.65,3.56L75.71,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H80a8,8,0,0,0,6.66-3.56L100.28,48h55.43l13.63,20.44A8,8,0,0,0,176,72h32a8,8,0,0,1,8,8ZM128,88a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,88Zm0,72a28,28,0,1,1,28-28A28,28,0,0,1,128,160Z"></path>
    </svg>
  );
}

function ChartBarIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M216,208H168V184h4a68.07,68.07,0,0,0,68-68,28,28,0,0,0-56,0,12,12,0,0,1-12,12h-4V56a40,40,0,0,0-80,0V88H84A12,12,0,0,1,72,76a28,28,0,0,0-56,0,68.07,68.07,0,0,0,68,68h4v64H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM96,128H84A52.06,52.06,0,0,1,32,76a12,12,0,0,1,24,0,28,28,0,0,0,28,28H96a8,8,0,0,0,8-8V56a24,24,0,0,1,48,0v80a8,8,0,0,0,8,8h12a28,28,0,0,0,28-28,12,12,0,0,1,24,0,52.06,52.06,0,0,1-52,52H160a8,8,0,0,0-8,8v32H104V136A8,8,0,0,0,96,128Z"></path>
    </svg>
  );
}

function CarrotIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M232,64H203.31l26.35-26.34a8,8,0,0,0-11.32-11.32L192,52.69V24a8,8,0,0,0-16,0V56.57a64,64,0,0,0-77.2,10.12l0,0,0,0,0,0c-40.1,39.39-70.25,133.08-73.19,142.45a16,16,0,0,0,21.26,21.26c9.37-2.94,103.18-33.13,142.47-73.21A64,64,0,0,0,199.43,80H232a8,8,0,0,0,0-16Zm-54.12,82c-8.94,9.12-21.25,17.8-34.85,25.73l-25.38-25.39a8,8,0,0,0-11.32,11.32l22.09,22.09c-40.87,21.19-86.32,35.42-87,35.63A7.93,7.93,0,0,0,40,216a7.93,7.93,0,0,0,.59-1.41c.29-.93,28-89.58,64-130.67l33.77,33.77a8,8,0,0,0,11.32-11.32L116.18,72.88A48,48,0,0,1,177.88,146Z"></path>
    </svg>
  );
}

function CpuIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M152,96H104a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V104A8,8,0,0,0,152,96Zm-8,48H112V112h32Zm88,0H216V112h16a8,8,0,0,0,0-16H216V56a16,16,0,0,0-16-16H160V24a8,8,0,0,0-16,0V40H112V24a8,8,0,0,0-16,0V40H56A16,16,0,0,0,40,56V96H24a8,8,0,0,0,0,16H40v32H24a8,8,0,0,0,0,16H40v40a16,16,0,0,0,16,16H96v16a8,8,0,0,0,16,0V216h32v16a8,8,0,0,0,16,0V216h40a16,16,0,0,0,16-16V160h16a8,8,0,0,0,0-16Zm-32,56H56V56H200v95.87s0,.09,0,.13,0,.09,0,.13V200Z"></path>
    </svg>
  );
}

function DropIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M174,47.75a254.19,254.19,0,0,0-41.45-38.3,8,8,0,0,0-9.18,0A254.19,254.19,0,0,0,82,47.75C54.51,79.32,40,112.6,40,144a88,88,0,0,0,176,0C216,112.6,201.49,79.32,174,47.75ZM128,216a72.08,72.08,0,0,1-72-72c0-57.23,55.47-105,72-118,16.53,13,72,60.75,72,118A72.08,72.08,0,0,1,128,216Zm55.89-62.66a57.6,57.6,0,0,1-46.56,46.55A8.75,8.75,0,0,1,136,200a8,8,0,0,1-1.32-15.89c16.57-2.79,30.63-16.85,33.44-33.45a8,8,0,0,1,15.78,2.68Z"></path>
    </svg>
  );
}

function ChefHatIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M240,112a56.06,56.06,0,0,0-56-56c-1.77,0-3.54.1-5.29.26a56,56,0,0,0-101.42,0C75.54,56.1,73.77,56,72,56A56,56,0,0,0,48,162.59V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V162.59A56.09,56.09,0,0,0,240,112Zm-48,96H64V167.42a55.49,55.49,0,0,0,8,.58H184a55.49,55.49,0,0,0,8-.58Zm-8-56H170.25l5.51-22.06a8,8,0,0,0-15.52-3.88L153.75,152H136V128a8,8,0,0,0-16,0v24H102.25l-6.49-25.94a8,8,0,1,0-15.52,3.88L85.75,152H72a40,40,0,0,1,0-80l.58,0A55.21,55.21,0,0,0,72,80a8,8,0,0,0,16,0,40,40,0,0,1,80,0,8,8,0,0,0,16,0,55.21,55.21,0,0,0-.58-8l.58,0a40,40,0,0,1,0,80Z"></path>
    </svg>
  );
}

function LegoIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M243.58,72.84,197.29,49.7C191.54,39.24,177.21,32,160,32c-22.43,0-40,12.3-40,28a20.77,20.77,0,0,0,1.06,6.53l-19.52,9.76A53.69,53.69,0,0,0,80,72c-22.43,0-40,12.3-40,28a20.77,20.77,0,0,0,1.06,6.53L12.42,120.84A8,8,0,0,0,8,128v64a8,8,0,0,0,4.42,7.16l64,32a8,8,0,0,0,7.16,0l160-80A8,8,0,0,0,248,144V80A8,8,0,0,0,243.58,72.84ZM80,151.06,33.89,128,51,119.45c7.24,5.29,17.48,8.55,29,8.55,22.43,0,40-12.3,40-28a21.77,21.77,0,0,0-4.35-12.88L131,79.45c7.24,5.29,17.48,8.55,29,8.55,18.38,0,33.49-8.26,38.35-19.88L222.11,80ZM160,48c13.74,0,24,6.34,24,12s-10.26,12-24,12-24-6.34-24-12S146.26,48,160,48ZM80,88c13.74,0,24,6.34,24,12s-10.26,12-24,12c-9.67,0-17.61-3.14-21.47-7a8.29,8.29,0,0,0-.84-.93A6.62,6.62,0,0,1,56,100C56,94.34,66.26,88,80,88ZM24,140.94l48,24v46.12l-48-24Zm64,70.12V164.94l144-72v46.12Z"></path>
    </svg>
  );
}

function LightningIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M215.79,118.17a8,8,0,0,0-5-5.66L153.18,90.9l14.66-73.33a8,8,0,0,0-13.69-7l-112,120a8,8,0,0,0,3,13l57.63,21.61L88.16,238.43a8,8,0,0,0,13.69,7l112-120A8,8,0,0,0,215.79,118.17ZM109.37,214l10.47-52.38a8,8,0,0,0-5-9.06L62,132.71l84.62-90.66L136.16,94.43a8,8,0,0,0,5,9.06l52.8,19.8Z"></path>
    </svg>
  );
}

function FeatherIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M221.28,34.75a64,64,0,0,0-90.49,0L60.69,104A15.9,15.9,0,0,0,56,115.31v73.38L26.34,218.34a8,8,0,0,0,11.32,11.32L67.32,200H140.7A15.92,15.92,0,0,0,152,195.32l0,0,69.23-70A64,64,0,0,0,221.28,34.75ZM142.07,46.06A48,48,0,0,1,211.79,112H155.33l34.35-34.34a8,8,0,0,0-11.32-11.32L120,124.69V67.87ZM72,115.35l32-31.67v57l-32,32ZM140.7,184H83.32l56-56h56.74Z"></path>
    </svg>
  );
}

function FloppyDiskIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M219.31,72,184,36.69A15.86,15.86,0,0,0,172.69,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V83.31A15.86,15.86,0,0,0,219.31,72ZM168,208H88V152h80Zm40,0H184V152a16,16,0,0,0-16-16H88a16,16,0,0,0-16,16v56H48V48H172.69L208,83.31ZM160,72a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h56A8,8,0,0,1,160,72Z"></path>
    </svg>
  );
}

function GameControllerIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M176,112H152a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16ZM104,96H96V88a8,8,0,0,0-16,0v8H72a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16ZM241.48,200.65a36,36,0,0,1-54.94,4.81c-.12-.12-.24-.24-.35-.37L146.48,160h-37L69.81,205.09l-.35.37A36.08,36.08,0,0,1,44,216,36,36,0,0,1,8.56,173.75a.68.68,0,0,1,0-.14L24.93,89.52A59.88,59.88,0,0,1,83.89,40H172a60.08,60.08,0,0,1,59,49.25c0,.06,0,.12,0,.18l16.37,84.17a.68.68,0,0,1,0,.14A35.74,35.74,0,0,1,241.48,200.65ZM172,144a44,44,0,0,0,0-88H83.89A43.9,43.9,0,0,0,40.68,92.37l0,.13L24.3,176.59A20,20,0,0,0,58,194.3l41.92-47.59a8,8,0,0,1,6-2.71Zm59.7,32.59-8.74-45A60,60,0,0,1,172,160h-4.2L198,194.31a20.09,20.09,0,0,0,17.46,5.39,20,20,0,0,0,16.23-23.11Z"></path>
    </svg>
  );
}

function HamburgerIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M48.07,104H207.93a16,16,0,0,0,15.72-19.38C216.22,49.5,176,24,128,24S39.78,49.5,32.35,84.62A16,16,0,0,0,48.07,104ZM128,40c39.82,0,74.21,20.61,79.93,48H48.07L48,87.93C53.79,60.61,88.18,40,128,40ZM229.26,152.48l-41.13,15L151,152.57a8,8,0,0,0-5.94,0l-37,14.81L71,152.57a8,8,0,0,0-5.7-.09l-44,16a8,8,0,0,0,5.47,15L40,178.69V184a40,40,0,0,0,40,40h96a40,40,0,0,0,40-40v-9.67l18.73-6.81a8,8,0,1,0-5.47-15ZM200,184a24,24,0,0,1-24,24H80a24,24,0,0,1-24-24V172.88l11.87-4.32L105,183.43a8,8,0,0,0,5.94,0l37-14.81,37,14.81a8,8,0,0,0,5.7.09l9.27-3.37ZM16,128a8,8,0,0,1,8-8H232a8,8,0,0,1,0,16H24A8,8,0,0,1,16,128Z"></path>
    </svg>
  );
}

function HandPeaceIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M212.24,30A28,28,0,0,0,161,36.77L148,85.09,135.05,36.77A28,28,0,1,0,81,51.26l9.38,35-8.73-1.68A28,28,0,0,0,56.8,132.38,27.86,27.86,0,0,0,48,152.87V160a80,80,0,0,0,80,80h.61c43.78-.33,79.39-36.62,79.39-80.9v-3.34a55.88,55.88,0,0,0-11.77-34.27L215,51.26A27.8,27.8,0,0,0,212.24,30ZM97.61,38a12,12,0,0,1,22,2.9l14.77,55.15a28,28,0,0,0-14,4.77,2.26,2.26,0,0,0-.16-.26A27.65,27.65,0,0,0,108,90.35L96.42,47.12A11.94,11.94,0,0,1,97.61,38Zm-33.36,71.6a12,12,0,0,1,14.25-9.34l20.71,4a12,12,0,0,1,9.36,14.16,12,12,0,0,1-14.25,9.34l-20.75-4a12,12,0,0,1-9.32-14.15Zm0,40.72a12,12,0,0,1,14-9.37l10.11,2a12,12,0,0,1,9.36,14.15,12,12,0,0,1-14.2,9.35l-10-2a12,12,0,0,1-9.34-14.16ZM192,159.1c0,35.53-28.49,64.64-63.5,64.9a64.08,64.08,0,0,1-61.56-44.78,30.74,30.74,0,0,0,3.48.95h0l10,2a28.33,28.33,0,0,0,5.61.57,28,28,0,0,0,24.16-42.14c.79-.43,1.57-.89,2.32-1.4l.16.26a27.82,27.82,0,0,0,17.78,12l6.32,1.26a36,36,0,0,0,9.53,32.49A8,8,0,0,0,157.71,174a20,20,0,0,1-3.31-23.51,8,8,0,0,0-5.46-11.66l-15.34-3.07a12,12,0,0,1-9.35-14.15h0a12,12,0,0,1,14.18-9.35l21.41,4.28A40.1,40.1,0,0,1,192,155.76Zm7.59-112-16.62,62a55.55,55.55,0,0,0-20-8.28l-2.5-.5L176.4,40.91a12,12,0,1,1,23.18,6.21Z"></path>
    </svg>
  );
}

function IceCreamIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M208,97.37V96A80,80,0,0,0,48,96v1.37A24,24,0,0,0,56,144h3.29l54.82,95.94a16,16,0,0,0,27.78,0L196.71,144H200a24,24,0,0,0,8-46.63ZM77.71,144H97.07l40.61,71.06L128,232Zm57.08,0,21.75,38.06-9.65,16.88L115.5,144Zm31,21.94L153.21,144h25.08ZM200,128H56a8,8,0,0,1,0-16,8,8,0,0,0,8-8V96a64,64,0,0,1,128,0v8a8,8,0,0,0,8,8,8,8,0,0,1,0,16Z"></path>
    </svg>
  );
}

function MapPinIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"></path>
    </svg>
  );
}

function MeteorIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M96,120a40,40,0,1,0,40,40A40,40,0,0,0,96,120Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,96,184Zm125.66-61.66a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32-11.32l48-48A8,8,0,0,1,221.66,122.34ZM160,136a8,8,0,0,1-5.66-13.66l24-24a8,8,0,0,1,11.32,11.32l-24,24A8,8,0,0,1,160,136Zm69.66-66.34-16,16a8,8,0,0,1-11.32-11.32l16-16a8,8,0,0,1,11.32,11.32ZM122.34,90.34l72-72a8,8,0,1,1,11.32,11.32l-72,72a8,8,0,0,1-11.32-11.32ZM146.91,199.6a8,8,0,0,1,0,11.31A72,72,0,1,1,45.09,109.09l82.74-82.75a8,8,0,1,1,11.32,11.32L56.4,120.4a56,56,0,0,0,79.2,79.2A8,8,0,0,1,146.91,199.6Z"></path>
    </svg>
  );
}

function MountainIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M164,80a28,28,0,1,0-28-28A28,28,0,0,0,164,80Zm0-40a12,12,0,1,1-12,12A12,12,0,0,1,164,40Zm90.88,155.92-54.56-92.08A15.87,15.87,0,0,0,186.55,96h0a15.85,15.85,0,0,0-13.76,7.84L146.63,148l-44.84-76.1a16,16,0,0,0-27.58,0L1.11,195.94A8,8,0,0,0,8,208H248a8,8,0,0,0,6.88-12.08ZM88,80l23.57,40H64.43ZM22,192l33-56h66l18.74,31.8,0,0L154,192Zm150.57,0-16.66-28.28L186.55,112,234,192Z"></path>
    </svg>
  );
}

function MouseMiddleClickIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M144,16H112A64.07,64.07,0,0,0,48,80v96a64.07,64.07,0,0,0,64,64h32a64.07,64.07,0,0,0,64-64V80A64.07,64.07,0,0,0,144,16Zm48,64v24H152V88a16,16,0,0,0-16-16V32h8A48.05,48.05,0,0,1,192,80Zm-56,56H120V88h16v23.9a.51.51,0,0,0,0,.2ZM112,32h8V72a16,16,0,0,0-16,16v16H64V80A48.05,48.05,0,0,1,112,32Zm32,192H112a48.05,48.05,0,0,1-48-48V120h40v16a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16V120h40v56A48.05,48.05,0,0,1,144,224Z"></path>
    </svg>
  );
}

function OnigiriIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M231.53,146.57,175.68,50.66l-.11-.19a56,56,0,0,0-95.14,0l-.11.19L24.47,146.57A56,56,0,0,0,72.09,232H183.91a56,56,0,0,0,47.62-85.43ZM160,216H96V168h64Zm58.86-20.55A39.49,39.49,0,0,1,183.91,216H176V168a16,16,0,0,0-16-16H96a16,16,0,0,0-16,16v48H72.09a40,40,0,0,1-34-61.09,2,2,0,0,0,.11-.2l55.85-95.9a40,40,0,0,1,67.84,0l55.85,95.9a2,2,0,0,0,.11.2A39.5,39.5,0,0,1,218.85,195.45Z"></path>
    </svg>
  );
}

function PenNibIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M248,92.68a15.86,15.86,0,0,0-4.69-11.31L174.63,12.68a16,16,0,0,0-22.63,0L123.57,41.11l-58,21.77A16.06,16.06,0,0,0,55.35,75.23L32.11,214.68A8,8,0,0,0,40,224a8.4,8.4,0,0,0,1.32-.11l139.44-23.24a16,16,0,0,0,12.35-10.17l21.77-58L243.31,104A15.87,15.87,0,0,0,248,92.68Zm-69.87,92.19L63.32,204l47.37-47.37a28,28,0,1,0-11.32-11.32L52,192.7,71.13,77.86,126,57.29,198.7,130ZM112,132a12,12,0,1,1,12,12A12,12,0,0,1,112,132Zm96-15.32L139.31,48l24-24L232,92.68Z"></path>
    </svg>
  );
}

function RadioactiveIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M92,136H40a16,16,0,0,1-11.76-5.21,16.21,16.21,0,0,1-4.17-12.37A103.83,103.83,0,0,1,67.65,42.93,16,16,0,0,1,90.75,48l26,45a8,8,0,1,1-13.86,8L76.89,56A87.83,87.83,0,0,0,40,119.86a.19.19,0,0,0,.07.16L92,120a8,8,0,0,1,0,16Zm139.93-17.58a103.83,103.83,0,0,0-43.58-75.49A16,16,0,0,0,165.25,48L139.3,93a8,8,0,0,0,13.86,8l26-45A87.87,87.87,0,0,1,216,119.86c0,.07,0,.12,0,.14H164a8,8,0,0,0,0,16h52a16,16,0,0,0,11.76-5.21A16.21,16.21,0,0,0,231.93,118.42Zm-79,36.76a8,8,0,1,0-13.86,8l25.84,44.73a88.22,88.22,0,0,1-73.81,0l25.83-44.73a8,8,0,1,0-13.86-8L77.25,199.91a16,16,0,0,0,7.12,22.52,104.24,104.24,0,0,0,87.26,0,16,16,0,0,0,7.12-22.52ZM128,140a12,12,0,1,0-12-12A12,12,0,0,0,128,140Z"></path>
    </svg>
  );
}

function SkullIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M128,16C70.65,16,24,60.86,24,116c0,34.1,18.27,66,48,84.28V216a16,16,0,0,0,16,16h8a4,4,0,0,0,4-4V200.27a8.17,8.17,0,0,1,7.47-8.25,8,8,0,0,1,8.53,8v28a4,4,0,0,0,4,4h16a4,4,0,0,0,4-4V200.27a8.17,8.17,0,0,1,7.47-8.25,8,8,0,0,1,8.53,8v28a4,4,0,0,0,4,4h8a16,16,0,0,0,16-16V200.28C213.73,182,232,150.1,232,116,232,60.86,185.35,16,128,16ZM92,152a20,20,0,1,1,20-20A20,20,0,0,1,92,152Zm72,0a20,20,0,1,1,20-20A20,20,0,0,1,164,152Z"></path>
    </svg>
  );
}

function ThumbsUpIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32ZM223.94,97l-12,96a8,8,0,0,1-7.94,7H88V105.89l36.71-73.43A24,24,0,0,1,144,56V80a8,8,0,0,0,8,8h64a8,8,0,0,1,7.94,9Z"></path>
    </svg>
  );
}

function TriangleIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M236.78,211.81A24.34,24.34,0,0,1,215.45,224H40.55a24.34,24.34,0,0,1-21.33-12.19,23.51,23.51,0,0,1,0-23.72L106.65,36.22a24.76,24.76,0,0,1,42.7,0L236.8,188.09A23.51,23.51,0,0,1,236.78,211.81Z"></path>
    </svg>
  );
}

function TruckTrailerIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M224,96.8V96a56.06,56.06,0,0,0-56-56h-8a16,16,0,0,0-16,16V176H128V72a8,8,0,0,0-8-8H16A16,16,0,0,0,0,80V184a32,32,0,0,0,56,21.13A32,32,0,0,0,111,192h82a32,32,0,0,0,63-8V136A40.07,40.07,0,0,0,224,96.8ZM160,56h8a40,40,0,0,1,40,40v8a8,8,0,0,0,8,8,24,24,0,0,1,24,24v20.31A31.71,31.71,0,0,0,224,152a32.06,32.06,0,0,0-31,24H160ZM112,80v96h-1a32,32,0,0,0-55-13.13,31.9,31.9,0,0,0-40-6.56V80ZM32,200a16,16,0,1,1,16-16A16,16,0,0,1,32,200Zm48,0a16,16,0,1,1,16-16A16,16,0,0,1,80,200Zm144,0a16,16,0,1,1,16-16A16,16,0,0,1,224,200Z"></path>
    </svg>
  );
}

function VideoConferenceIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,80H168V56h48ZM40,56H152V200H40ZM216,200H168V136h48v64ZM180,88a12,12,0,1,1,12,12A12,12,0,0,1,180,88Zm24,80a12,12,0,1,1-12-12A12,12,0,0,1,204,168Zm-68.25-2a39.76,39.76,0,0,0-17.19-23.34,32,32,0,1,0-45.12,0A39.84,39.84,0,0,0,56.25,166a8,8,0,0,0,15.5,4c2.64-10.25,13.06-18,24.25-18s21.62,7.73,24.25,18a8,8,0,1,0,15.5-4ZM80,120a16,16,0,1,1,16,16A16,16,0,0,1,80,120Z"></path>
    </svg>
  );
}

function WavesIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M222.16,177.25a8,8,0,0,1-1,11.25c-17.36,14.39-32.86,19.5-47,19.5-18.58,0-34.82-8.82-49.93-17-25.35-13.76-47.24-25.64-79.07.74a8,8,0,1,1-10.22-12.31c40.17-33.28,70.32-16.92,96.93-2.48,25.35,13.75,47.24,25.63,79.07-.74A8,8,0,0,1,222.16,177.25Zm-11.27-57c-31.83,26.38-53.72,14.5-79.07.74-26.61-14.43-56.76-30.79-96.93,2.49a8,8,0,0,0,10.22,12.31c31.83-26.38,53.72-14.5,79.07-.74,15.11,8.19,31.35,17,49.93,17,14.14,0,29.64-5.11,47-19.5a8,8,0,1,0-10.22-12.31ZM45.11,79.8c31.83-26.37,53.72-14.49,79.07-.74,15.11,8.2,31.35,17,49.93,17,14.14,0,29.64-5.12,47-19.5a8,8,0,1,0-10.22-12.31c-31.83,26.38-53.72,14.5-79.07.74C105.21,50.58,75.06,34.22,34.89,67.5A8,8,0,1,0,45.11,79.8Z"></path>
    </svg>
  );
}

function WindmillIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M224,224H182.94l-6.3-44.12,3.24,1.91a16,16,0,0,0,21.91-5.67l12-20.34a16,16,0,0,0-5.67-21.91l-35-20.61,40.69-69.13a16,16,0,0,0-5.67-21.91l-20.34-12a16,16,0,0,0-21.91,5.67l-20.61,35L76.12,10.22a16,16,0,0,0-21.91,5.67l-12,20.33a16,16,0,0,0,5.67,21.92l35,20.61L42.21,147.88a16,16,0,0,0,5.67,21.91l20.34,12a15.57,15.57,0,0,0,10.58,2L73.06,224H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16Zm-24-76.34L188,168l-69.13-40.69,12-20.35ZM179.66,24,200,36l-40.69,69.14L139,93.17ZM56,44.35,68,24,137.14,64.7l-12,20.35ZM76.34,168,56,156,96.69,86.86l20.36,12Zm12.88,56L98,162.8l12.77-21.7L159,169.5l7.79,54.5Z"></path>
    </svg>
  );
}

function YarnIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M232,216H183.39A103.95,103.95,0,1,0,128,232l104,0a8,8,0,1,0,0-16ZM128,40a87.51,87.51,0,0,1,43.93,11.77,222.06,222.06,0,0,0-27.88,15.09,222.23,222.23,0,0,0-45-22A87.52,87.52,0,0,1,128,40ZM78.56,55.24a206,206,0,0,1,51.11,21.57A225.76,225.76,0,0,0,110.1,93.36,181.54,181.54,0,0,0,57.73,75.09,88.67,88.67,0,0,1,78.56,55.24ZM48.72,89.82a165.82,165.82,0,0,1,49.67,15.51A228,228,0,0,0,82.76,124.5,142.65,142.65,0,0,0,41.28,113,87.5,87.5,0,0,1,48.72,89.82ZM40,129a126.07,126.07,0,0,1,33.63,9,222.36,222.36,0,0,0-19.07,38.45A87.51,87.51,0,0,1,40,129Zm26.42,61.81A209.36,209.36,0,0,1,187,62.74a89,89,0,0,1,16.22,19.57A183.89,183.89,0,0,0,87,205.82,88.56,88.56,0,0,1,66.43,190.81ZM125.66,216A87.66,87.66,0,0,1,101.83,212,167.84,167.84,0,0,1,210.28,96.79a87.35,87.35,0,0,1,5.38,23.55A144.59,144.59,0,0,0,125.66,216Zm89.82-78.44a88.19,88.19,0,0,1-72.67,77.22A128.64,128.64,0,0,1,215.48,137.53Z"></path>
    </svg>
  );
}

export {
  AddressBookTabsIcon,
  AirplaneIcon,
  AlarmIcon,
  ArrowUpRightMiniIcon,
  AvocadoIcon,
  BarcodeIcon,
  BellIcon,
  BluetoothIcon,
  BicycleIcon,
  BoneIcon,
  BowlSteamIcon,
  BrainIcon,
  BroomIcon,
  BrowsersIcon,
  CactusIcon,
  CameraIcon,
  CarrotIcon,
  ChartBarIcon,
  ChefHatIcon,
  CpuIcon,
  DropIcon,
  FeatherIcon,
  FloppyDiskIcon,
  GameControllerIcon,
  HamburgerIcon,
  HandPeaceIcon,
  IceCreamIcon,
  LegoIcon,
  LightningIcon,
  Logo,
  MapPinIcon,
  MeteorIcon,
  MountainIcon,
  MouseMiddleClickIcon,
  OnigiriIcon,
  PenNibIcon,
  RadioactiveIcon,
  SkullIcon,
  ThumbsUpIcon,
  TriangleIcon,
  TruckTrailerIcon,
  VideoConferenceIcon,
  WavesIcon,
  WindmillIcon,
  YarnIcon,
};

/*

browsers
cpu
feather

*/
