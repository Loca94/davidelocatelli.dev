import { ComponentPropsWithoutRef } from 'react';

export function Logo(props: ComponentPropsWithoutRef<'svg'>) {
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
