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
          <stop className="stop-color-gray group-hover:stop-color-emerald transition-all duration-300" />
          <stop
            className="stop-color-gray group-hover:stop-color-emerald transition-all duration-300"
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

function BootstrapIconsLogo(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375z" />
      <path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396z" />
    </svg>
  );
}

function BoxiconsLogo(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M6 18a6.06 6.06 0 0 0 5.17-6 7.62 7.62 0 0 1 6.52-7.51l2.59-.37c-.07-.08-.13-.16-.21-.24-3.26-3.26-9.52-2.28-14 2.18C2.28 9.9 1 15 2.76 18.46z"></path>
      <path d="M12.73 12a7.63 7.63 0 0 1-6.51 7.52l-2.46.35.15.17c3.26 3.26 9.52 2.29 14-2.17C21.68 14.11 23 9 21.25 5.59l-3.34.48A6.05 6.05 0 0 0 12.73 12z"></path>
    </svg>
  );
}

function CSSggLogo(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M15 5C15 6.65685 13.6569 8 12 8C10.3431 8 9 6.65685 9 5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5Z"
        fill="currentColor"
      />
      <path
        d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
        fill="currentColor"
      />
      <path
        d="M12 22C13.6569 22 15 20.6569 15 19C15 17.3431 13.6569 16 12 16C10.3431 16 9 17.3431 9 19C9 20.6569 10.3431 22 12 22Z"
        fill="currentColor"
      />
      <path
        d="M22 12C22 13.6569 20.6569 15 19 15C17.3431 15 16 13.6569 16 12C16 10.3431 17.3431 9 19 9C20.6569 9 22 10.3431 22 12Z"
        fill="currentColor"
      />
      <path
        d="M5 15C6.65685 15 8 13.6569 8 12C8 10.3431 6.65685 9 5 9C3.34315 9 2 10.3431 2 12C2 13.6569 3.34315 15 5 15Z"
        fill="currentColor"
      />
    </svg>
  );
}

function FeatherIconsLogo(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
      <line x1="16" y1="8" x2="2" y2="22"></line>
      <line x1="17.5" y1="15" x2="9" y2="15"></line>
    </svg>
  );
}

function GithubLogo(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
    </svg>
  );
}

function HealthIconsLogo(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 13C26.4853 13 28.5 10.9853 28.5 8.5C28.5 6.01472 26.4853 4 24 4C21.5147 4 19.5 6.01472 19.5 8.5C19.5 10.9853 21.5147 13 24 13ZM36.5596 17.0799C37.6201 17.3889 38.2292 18.4992 37.9201 19.5596C37.6111 20.6201 36.5009 21.2292 35.4404 20.9201C34.3489 20.602 33.3213 20.3256 32.3433 20.0894L32.3912 20.2384C33.6992 24.3151 35.0282 28.4572 32.8172 32.0289L30.4503 42.4432C30.2246 43.4362 29.2889 44.1011 28.277 43.9875C27.2651 43.874 26.5 43.0183 26.5 42V35.9302C25.7042 36 24.8762 36 24 36C23.3058 36 22.6417 36 22 35.9653V42C22 43.0183 21.2349 43.874 20.223 43.9875C19.2111 44.1011 18.2754 43.4362 18.0497 42.4432L15.9101 33.0287C12.7197 29.2431 14.1769 24.7016 15.6089 20.2384L15.6458 20.1234C14.6639 20.355 13.6318 20.6228 12.5348 20.9272C11.4704 21.2225 10.3682 20.5991 10.0728 19.5347C9.7775 18.4704 10.4009 17.3681 11.4653 17.0728C16.2296 15.7508 20.0803 15.0178 23.9908 15.0003C27.9083 14.9828 31.768 15.6834 36.5596 17.0799Z"
        fill="currentColor"
      />
    </svg>
  );
}

function HeroiconsLogo(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
  );
}

function PhosphorIconsLogo(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      {...props}
    >
      <path d="M152,32H72a8,8,0,0,0-8,8V168a80.09,80.09,0,0,0,80,80,8,8,0,0,0,8-8V176a72,72,0,0,0,0-144ZM80,70.54,130.32,160H80Zm56,66.92L85.68,48H136ZM80.51,176H136v55.5A64.14,64.14,0,0,1,80.51,176ZM152,160V48a56,56,0,0,1,0,112Z"></path>
    </svg>
  );
}

function TablersIconsLogo(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 7l5 5l-5 5" />
      <path d="M13 17l6 0" />
    </svg>
  );
}

export {
  BootstrapIconsLogo,
  BoxiconsLogo,
  CSSggLogo,
  FeatherIconsLogo,
  GithubLogo,
  HealthIconsLogo,
  HeroiconsLogo,
  Logo,
  PhosphorIconsLogo,
  TablersIconsLogo,
};
