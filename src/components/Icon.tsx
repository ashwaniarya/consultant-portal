import React from "react";

export type IconType =
  | "arrow-up"
  | "arrow-down"
  | "trending-up"
  | "plan-chat"
  | "house"
  | "price-tag"
  | "chat"
  | "check-fat"
  | "coin-stack"
  | "piggy-bank"
  | "trending-down"
  | "trending-up"
  | "coins"
  | "chart-bar"
  | "arrow-up-right"
  | "chat-plain"
  | "user-four"
  | "gear";

interface IconProps {
  type: IconType;
  className?: string;
  size?: number;
  color?: string;
}

const Icon: React.FC<IconProps> = ({
  type,
  className = "",
  size = 24,
  color = "#8A94A6",
}) => {
  const icons = {
    gear: (
      <svg
        width={size}
        height={size}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.875 10.1687C16.8781 10.0562 16.8781 9.94373 16.875 9.83123L18.0406 8.37498C18.1017 8.29852 18.1441 8.20877 18.1641 8.11297C18.1842 8.01716 18.1815 7.91798 18.1563 7.82341C17.9648 7.10525 17.679 6.41564 17.3063 5.77263C17.2574 5.6885 17.1896 5.61694 17.1082 5.56364C17.0268 5.51034 16.9341 5.47677 16.8375 5.4656L14.9844 5.25935C14.9073 5.1781 14.8292 5.09998 14.75 5.02498L14.5313 3.16716C14.52 3.07045 14.4863 2.97771 14.4329 2.89633C14.3794 2.81494 14.3077 2.74717 14.2234 2.69841C13.5805 2.32595 12.8908 2.04064 12.1727 1.84997C12.0781 1.82471 11.9789 1.82201 11.8831 1.84209C11.7873 1.86218 11.6976 1.90448 11.6211 1.9656L10.1688 3.12497C10.0563 3.12497 9.94376 3.12497 9.83126 3.12497L8.37501 1.96169C8.29855 1.90057 8.2088 1.85827 8.113 1.83819C8.01719 1.8181 7.91801 1.8208 7.82344 1.84607C7.10528 2.0375 6.41567 2.32332 5.77266 2.69607C5.68853 2.74492 5.61697 2.81273 5.56367 2.89411C5.51037 2.97548 5.4768 3.06818 5.46563 3.16482L5.25938 5.02107C5.17813 5.09867 5.10001 5.1768 5.02501 5.25544L3.16719 5.46872C3.07048 5.47998 2.97774 5.51367 2.89636 5.56711C2.81497 5.62055 2.7472 5.69227 2.69844 5.77654C2.32606 6.41963 2.0405 7.10923 1.84922 7.82732C1.82407 7.92195 1.82149 8.02116 1.84171 8.11697C1.86193 8.21277 1.90438 8.30249 1.96563 8.37888L3.12501 9.83123C3.12501 9.94373 3.12501 10.0562 3.12501 10.1687L1.96172 11.625C1.90061 11.7014 1.8583 11.7912 1.83822 11.887C1.81813 11.9828 1.82083 12.082 1.8461 12.1765C2.03753 12.8947 2.32335 13.5843 2.6961 14.2273C2.74495 14.3114 2.81276 14.383 2.89414 14.4363C2.97551 14.4896 3.06821 14.5232 3.16485 14.5344L5.01797 14.7406C5.09558 14.8219 5.1737 14.9 5.25235 14.975L5.46876 16.8328C5.48001 16.9295 5.5137 17.0222 5.56714 17.1036C5.62058 17.185 5.6923 17.2528 5.77657 17.3015C6.41967 17.6739 7.10926 17.9595 7.82735 18.1508C7.92198 18.1759 8.02119 18.1785 8.117 18.1583C8.21281 18.1381 8.30252 18.0956 8.37891 18.0344L9.83126 16.875C9.94376 16.8781 10.0563 16.8781 10.1688 16.875L11.625 18.0406C11.7015 18.1017 11.7912 18.144 11.887 18.1641C11.9828 18.1842 12.082 18.1815 12.1766 18.1562C12.8948 17.9651 13.5845 17.6793 14.2274 17.3062C14.3115 17.2574 14.383 17.1896 14.4363 17.1082C14.4896 17.0268 14.5232 16.9341 14.5344 16.8375L14.7406 14.9844C14.8219 14.9073 14.9 14.8291 14.975 14.75L16.8328 14.5312C16.9295 14.52 17.0223 14.4863 17.1037 14.4328C17.185 14.3794 17.2528 14.3077 17.3016 14.2234C17.674 13.5803 17.9595 12.8907 18.1508 12.1726C18.1759 12.078 18.1785 11.9788 18.1583 11.883C18.1381 11.7872 18.0956 11.6975 18.0344 11.6211L16.875 10.1687ZM10 13.125C9.38194 13.125 8.77775 12.9417 8.26385 12.5983C7.74995 12.2549 7.34941 11.7669 7.11288 11.1959C6.87636 10.6248 6.81447 9.99651 6.93505 9.39032C7.05563 8.78413 7.35326 8.22731 7.7903 7.79027C8.22734 7.35323 8.78416 7.0556 9.39035 6.93502C9.99654 6.81444 10.6249 6.87633 11.1959 7.11285C11.7669 7.34938 12.255 7.74991 12.5983 8.26382C12.9417 8.77772 13.125 9.38191 13.125 9.99998C13.125 10.8288 12.7958 11.6236 12.2097 12.2097C11.6237 12.7957 10.8288 13.125 10 13.125Z"
          fill={color}
        />
      </svg>
    ),
    "user-four": (
      <svg
        width={size}
        height={size}
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 17.3242C18.0699 17.4171 18.1125 17.5276 18.123 17.6433C18.1336 17.759 18.1116 17.8754 18.0597 17.9793C18.0078 18.0833 17.9279 18.1707 17.829 18.2318C17.7301 18.2928 17.6162 18.3251 17.5 18.325H2.5C2.38393 18.325 2.27015 18.2927 2.17142 18.2317C2.07268 18.1706 1.99289 18.0833 1.94098 17.9795C1.88908 17.8757 1.8671 17.7595 1.87753 17.6439C1.88795 17.5283 1.93036 17.4179 2 17.325C2.55343 16.583 3.29142 15.9988 4.14063 15.6305C3.67514 15.2056 3.34898 14.65 3.20496 14.0364C3.06094 13.4229 3.10579 12.7802 3.33362 12.1926C3.56145 11.605 3.96161 11.1 4.48159 10.7439C5.00157 10.3878 5.61705 10.1973 6.24727 10.1973C6.87748 10.1973 7.49297 10.3878 8.01294 10.7439C8.53292 11.1 8.93308 11.605 9.16091 12.1926C9.38874 12.7802 9.43359 13.4229 9.28957 14.0364C9.14555 14.65 8.81939 15.2056 8.35391 15.6305C8.96658 15.8953 9.52333 16.2742 9.99453 16.7469C10.4657 16.2742 11.0225 15.8953 11.6352 15.6305C11.1697 15.2056 10.8435 14.65 10.6995 14.0364C10.5555 13.4229 10.6003 12.7802 10.8281 12.1926C11.056 11.605 11.4561 11.1 11.9761 10.7439C12.4961 10.3878 13.1116 10.1973 13.7418 10.1973C14.372 10.1973 14.9875 10.3878 15.5075 10.7439C16.0274 11.1 16.4276 11.605 16.6554 12.1926C16.8833 12.7802 16.9281 13.4229 16.7841 14.0364C16.6401 14.65 16.3139 15.2056 15.8484 15.6305C16.7016 15.9969 17.4435 16.5809 18 17.3242ZM2.125 10.075C2.19066 10.1243 2.26538 10.1601 2.34489 10.1805C2.4244 10.2008 2.50714 10.2053 2.58839 10.1937C2.66964 10.1821 2.74781 10.1546 2.81843 10.1128C2.88906 10.071 2.95075 10.0157 3 9.95001C3.37841 9.44546 3.86909 9.03595 4.4332 8.7539C4.9973 8.47185 5.61932 8.32501 6.25 8.32501C6.88068 8.32501 7.5027 8.47185 8.0668 8.7539C8.63091 9.03595 9.12159 9.44546 9.5 9.95001C9.55822 10.0276 9.63371 10.0906 9.72049 10.134C9.80728 10.1774 9.90297 10.2 10 10.2C10.097 10.2 10.1927 10.1774 10.2795 10.134C10.3663 10.0906 10.4418 10.0276 10.5 9.95001C10.8784 9.44546 11.3691 9.03595 11.9332 8.7539C12.4973 8.47185 13.1193 8.32501 13.75 8.32501C14.3807 8.32501 15.0027 8.47185 15.5668 8.7539C16.1309 9.03595 16.6216 9.44546 17 9.95001C17.0493 10.0157 17.111 10.071 17.1817 10.1128C17.2524 10.1546 17.3306 10.182 17.4119 10.1936C17.4932 10.2052 17.5759 10.2006 17.6555 10.1802C17.735 10.1598 17.8097 10.1239 17.8754 10.0746C17.9411 10.0253 17.9964 9.96357 18.0382 9.8929C18.08 9.82223 18.1074 9.74402 18.119 9.66273C18.1306 9.58144 18.126 9.49867 18.1056 9.41914C18.0852 9.33961 18.0493 9.26489 18 9.19923C17.4466 8.45745 16.7085 7.87351 15.8594 7.50548C16.3249 7.08063 16.651 6.52498 16.795 5.91144C16.9391 5.2979 16.8942 4.65516 16.6664 4.06757C16.4386 3.47998 16.0384 2.975 15.5184 2.61892C14.9984 2.26284 14.3829 2.0723 13.7527 2.0723C13.1225 2.0723 12.507 2.26284 11.9871 2.61892C11.4671 2.975 11.0669 3.47998 10.8391 4.06757C10.6113 4.65516 10.5664 5.2979 10.7104 5.91144C10.8544 6.52498 11.1806 7.08063 11.6461 7.50548C11.0334 7.7703 10.4767 8.14916 10.0055 8.62188C9.53427 8.14916 8.97751 7.7703 8.36484 7.50548C8.83033 7.08063 9.15649 6.52498 9.30051 5.91144C9.44453 5.2979 9.39968 4.65516 9.17185 4.06757C8.94402 3.47998 8.54386 2.975 8.02388 2.61892C7.5039 2.26284 6.88842 2.0723 6.2582 2.0723C5.62799 2.0723 5.0125 2.26284 4.49253 2.61892C3.97255 2.975 3.57239 3.47998 3.34456 4.06757C3.11673 4.65516 3.07188 5.2979 3.2159 5.91144C3.35992 6.52498 3.68608 7.08063 4.15156 7.50548C3.29838 7.87219 2.55645 8.45652 2 9.20001C1.95075 9.26567 1.91492 9.34038 1.89455 9.41989C1.87418 9.4994 1.86967 9.58214 1.88128 9.66339C1.89289 9.74465 1.92039 9.82282 1.9622 9.89344C2.00402 9.96406 2.05934 10.0258 2.125 10.075Z"
          fill={color}
        />
      </svg>
    ),
    "chat-plain": (
      <svg
        width={size}
        height={size}
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.125 9.88751C18.1227 11.9588 17.2989 13.9446 15.8343 15.4093C14.3696 16.8739 12.3838 17.6977 10.3125 17.7H3.72422C3.39966 17.6996 3.08852 17.5705 2.85902 17.341C2.62953 17.1115 2.50041 16.8003 2.5 16.4758V9.88751C2.5 7.81551 3.3231 5.82837 4.78823 4.36324C6.25336 2.89811 8.2405 2.07501 10.3125 2.07501C12.3845 2.07501 14.3716 2.89811 15.8368 4.36324C17.3019 5.82837 18.125 7.81551 18.125 9.88751Z"
          fill={color}
        />
      </svg>
    ),
    "arrow-up-right": (
      <svg
        width={size}
        height={size}
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.0626 4.5V11.8125C14.0626 11.9617 14.0033 12.1048 13.8978 12.2102C13.7923 12.3157 13.6493 12.375 13.5001 12.375C13.3509 12.375 13.2078 12.3157 13.1023 12.2102C12.9968 12.1048 12.9376 11.9617 12.9376 11.8125V5.85773L4.89804 13.898C4.79249 14.0035 4.64934 14.0628 4.50007 14.0628C4.3508 14.0628 4.20765 14.0035 4.1021 13.898C3.99655 13.7924 3.93726 13.6493 3.93726 13.5C3.93726 13.3507 3.99655 13.2076 4.1021 13.102L12.1423 5.0625H6.18757C6.03838 5.0625 5.89531 5.00324 5.78982 4.89775C5.68433 4.79226 5.62507 4.64918 5.62507 4.5C5.62507 4.35082 5.68433 4.20774 5.78982 4.10225C5.89531 3.99676 6.03838 3.9375 6.18757 3.9375H13.5001C13.6493 3.9375 13.7923 3.99676 13.8978 4.10225C14.0033 4.20774 14.0626 4.35082 14.0626 4.5Z"
          fill={color}
        />
      </svg>
    ),
    "chart-bar": (
      <svg
        width={size}
        height={size}
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.875 9.75C10.875 9.84946 10.8355 9.94484 10.7652 10.0152C10.6948 10.0855 10.5995 10.125 10.5 10.125H1.5C1.40054 10.125 1.30516 10.0855 1.23483 10.0152C1.16451 9.94484 1.125 9.84946 1.125 9.75C1.125 9.65054 1.16451 9.55516 1.23483 9.48483C1.30516 9.41451 1.40054 9.375 1.5 9.375H1.875V6.375C1.875 6.27554 1.91451 6.18016 1.98484 6.10983C2.05516 6.03951 2.15054 6 2.25 6H3.375C3.47446 6 3.56984 6.03951 3.64016 6.10983C3.71049 6.18016 3.75 6.27554 3.75 6.375V9.375H4.5V4.125C4.5 4.02554 4.53951 3.93016 4.60984 3.85984C4.68016 3.78951 4.77554 3.75 4.875 3.75H6.375C6.47446 3.75 6.56984 3.78951 6.64017 3.85984C6.71049 3.93016 6.75 4.02554 6.75 4.125V9.375H7.5V1.875C7.5 1.77554 7.53951 1.68016 7.60983 1.60984C7.68016 1.53951 7.77554 1.5 7.875 1.5H9.75C9.84946 1.5 9.94484 1.53951 10.0152 1.60984C10.0855 1.68016 10.125 1.77554 10.125 1.875V9.375H10.5C10.5995 9.375 10.6948 9.41451 10.7652 9.48483C10.8355 9.55516 10.875 9.65054 10.875 9.75Z"
          fill={color}
        />
      </svg>
    ),
    coins: (
      <svg
        width={size}
        height={size}
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.73031 2.9925C8.75859 2.50688 7.46859 2.25 6 2.25C4.53141 2.25 3.24141 2.50688 2.26969 2.9925C1.29797 3.47812 0.75 4.16156 0.75 4.875V7.125C0.75 7.83844 1.30406 8.52422 2.26969 9.0075C3.23531 9.49078 4.53141 9.75 6 9.75C7.46859 9.75 8.75859 9.49313 9.73031 9.0075C10.702 8.52188 11.25 7.83844 11.25 7.125V4.875C11.25 4.16156 10.6959 3.47578 9.73031 2.9925ZM5.625 7.4925V8.9925C4.73438 8.96344 3.98438 8.83219 3.375 8.64141V7.17422C4.10959 7.36993 4.86496 7.4771 5.625 7.49344V7.4925ZM6.375 7.4925C7.13504 7.47616 7.89041 7.369 8.625 7.17328V8.64094C8.01562 8.83172 7.26562 8.96297 6.375 8.99203V7.4925ZM1.5 7.125V6.25922C1.73599 6.45511 1.99436 6.62237 2.26969 6.7575C2.38359 6.81422 2.50406 6.86766 2.625 6.91828V8.34375C1.88297 7.97625 1.5 7.51359 1.5 7.125ZM9.375 8.34375V6.91828C9.49734 6.86766 9.61641 6.81422 9.73031 6.7575C10.0056 6.62237 10.264 6.45511 10.5 6.25922V7.125C10.5 7.51359 10.117 7.97625 9.375 8.34375Z"
          fill={color}
        />
      </svg>
    ),
    "coin-stack": (
      <svg
        width={size}
        height={size}
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.62501 4.19859V3.9375C8.62501 2.76188 6.85173 1.875 4.50001 1.875C2.14829 1.875 0.375008 2.76188 0.375008 3.9375V5.8125C0.375008 6.79172 1.60548 7.56984 3.37501 7.80281V8.0625C3.37501 9.23812 5.14829 10.125 7.50001 10.125C9.85173 10.125 11.625 9.23812 11.625 8.0625V6.1875C11.625 5.21719 10.4334 4.43812 8.62501 4.19859ZM2.62501 6.88453C1.70673 6.62812 1.12501 6.20578 1.12501 5.8125V5.15297C1.50751 5.42391 2.01985 5.64234 2.62501 5.78906V6.88453ZM6.37501 5.78906C6.98016 5.64234 7.49251 5.42391 7.87501 5.15297V5.8125C7.87501 6.20578 7.29329 6.62812 6.37501 6.88453V5.78906ZM5.62501 9.13453C4.70673 8.87812 4.12501 8.45578 4.12501 8.0625V7.86703C4.24829 7.87172 4.37298 7.875 4.50001 7.875C4.68188 7.875 4.85954 7.86891 5.03391 7.85859C5.22763 7.92794 5.42495 7.98678 5.62501 8.03484V9.13453ZM5.62501 7.04297C5.25254 7.09799 4.87652 7.12541 4.50001 7.125C4.1235 7.12541 3.74747 7.09799 3.37501 7.04297V5.92781C3.74803 5.97642 4.12383 6.00053 4.50001 6C4.87618 6.00053 5.25199 5.97642 5.62501 5.92781V7.04297ZM8.62501 9.29297C7.879 9.40234 7.12102 9.40234 6.37501 9.29297V8.175C6.74791 8.22513 7.12375 8.25018 7.50001 8.25C7.87618 8.25053 8.25199 8.22642 8.62501 8.17781V9.29297ZM10.875 8.0625C10.875 8.45578 10.2933 8.87812 9.37501 9.13453V8.03906C9.98016 7.89234 10.4925 7.67391 10.875 7.40297V8.0625Z"
          fill={color}
        />
      </svg>
    ),
    "check-fat": (
      <svg
        width={size}
        height={size}
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.4061 4.2614L5.38686 10.2802C5.31722 10.3498 5.23453 10.4051 5.14353 10.4428C5.05252 10.4805 4.95498 10.4999 4.85647 10.4999C4.75797 10.4999 4.66043 10.4805 4.56942 10.4428C4.47842 10.4051 4.39573 10.3498 4.32608 10.2802L0.968896 6.90515C0.828493 6.76453 0.749634 6.57394 0.749634 6.37523C0.749634 6.17652 0.828493 5.98593 0.968896 5.84531L2.0939 4.72031C2.23407 4.5801 2.42405 4.5011 2.6223 4.50057C2.82055 4.50005 3.01095 4.57804 3.15186 4.7175L4.86936 6.37078L4.87452 6.37594L9.22124 2.09297C9.3618 1.95299 9.55209 1.8744 9.75046 1.8744C9.94883 1.8744 10.1391 1.95299 10.2797 2.09297L11.4047 3.19734C11.4749 3.26695 11.5307 3.34977 11.5688 3.44103C11.6069 3.53229 11.6266 3.63018 11.6268 3.72908C11.6269 3.82798 11.6075 3.92592 11.5696 4.01728C11.5317 4.10864 11.4761 4.19161 11.4061 4.2614Z"
          fill={color}
        />
      </svg>
    ),
    "plan-chat": (
      <svg
        width={size}
        height={size}
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.875 5.8125C10.8736 7.05528 10.3793 8.24677 9.50056 9.12556C8.62177 10.0043 7.43028 10.4986 6.1875 10.5H2.23453C2.0398 10.4998 1.85311 10.4223 1.71541 10.2846C1.57772 10.1469 1.50025 9.9602 1.5 9.76547V5.8125C1.5 4.5693 1.99386 3.37701 2.87294 2.49794C3.75201 1.61886 4.9443 1.125 6.1875 1.125C7.4307 1.125 8.62299 1.61886 9.50206 2.49794C10.3811 3.37701 10.875 4.5693 10.875 5.8125Z"
          fill={color}
        />
      </svg>
    ),
    house: (
      <svg
        width={size}
        height={size}
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.5 9.22737V16.45C17.5 16.7815 17.3683 17.0995 17.1339 17.3339C16.8995 17.5683 16.5815 17.7 16.25 17.7H13.125C12.7935 17.7 12.4755 17.5683 12.2411 17.3339C12.0067 17.0995 11.875 16.7815 11.875 16.45V13.325C11.875 13.1593 11.8092 13.0003 11.6919 12.8831C11.5747 12.7659 11.4158 12.7 11.25 12.7H8.75C8.58424 12.7 8.42527 12.7659 8.30806 12.8831C8.19085 13.0003 8.125 13.1593 8.125 13.325V16.45C8.125 16.7815 7.9933 17.0995 7.75888 17.3339C7.52446 17.5683 7.20652 17.7 6.875 17.7H3.75C3.41848 17.7 3.10054 17.5683 2.86612 17.3339C2.6317 17.0995 2.5 16.7815 2.5 16.45V9.22737C2.49997 9.05437 2.53586 8.88325 2.60538 8.72483C2.67491 8.56642 2.77656 8.42416 2.90391 8.30706L9.15391 2.41018L9.1625 2.40159C9.39261 2.19232 9.69248 2.07635 10.0035 2.07635C10.3146 2.07635 10.6144 2.19232 10.8445 2.40159C10.8472 2.40465 10.8501 2.40752 10.8531 2.41018L17.1031 8.30706C17.2292 8.42478 17.3295 8.56731 17.3978 8.7257C17.4661 8.88408 17.5009 9.05489 17.5 9.22737Z"
          fill={color}
        />
      </svg>
    ),
    chat: (
      <svg
        width={size}
        height={size}
        viewBox="0 0 20 20"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.3125 1.875C8.24119 1.87727 6.25538 2.70111 4.79074 4.16574C3.32611 5.63038 2.50227 7.61619 2.5 9.6875V16.2758C2.50041 16.6003 2.62953 16.9115 2.85902 17.141C3.08852 17.3705 3.39966 17.4996 3.72422 17.5H10.3125C12.3845 17.5 14.3716 16.6769 15.8368 15.2118C17.3019 13.7466 18.125 11.7595 18.125 9.6875C18.125 7.6155 17.3019 5.62836 15.8368 4.16323C14.3716 2.6981 12.3845 1.875 10.3125 1.875ZM12.5 11.875H7.5C7.33424 11.875 7.17527 11.8092 7.05806 11.6919C6.94085 11.5747 6.875 11.4158 6.875 11.25C6.875 11.0842 6.94085 10.9253 7.05806 10.8081C7.17527 10.6908 7.33424 10.625 7.5 10.625H12.5C12.6658 10.625 12.8247 10.6908 12.9419 10.8081C13.0592 10.9253 13.125 11.0842 13.125 11.25C13.125 11.4158 13.0592 11.5747 12.9419 11.6919C12.8247 11.8092 12.6658 11.875 12.5 11.875ZM12.5 9.375H7.5C7.33424 9.375 7.17527 9.30915 7.05806 9.19194C6.94085 9.07473 6.875 8.91576 6.875 8.75C6.875 8.58424 6.94085 8.42527 7.05806 8.30806C7.17527 8.19085 7.33424 8.125 7.5 8.125H12.5C12.6658 8.125 12.8247 8.19085 12.9419 8.30806C13.0592 8.42527 13.125 8.58424 13.125 8.75C13.125 8.91576 13.0592 9.07473 12.9419 9.19194C12.8247 9.30915 12.6658 9.375 12.5 9.375Z"
          fill={color}
        />
      </svg>
    ),
    "price-tag": (
      <svg
        width={size}
        height={size}
        viewBox="0 0 20 20"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.0086 10.625L11.25 2.86641C11.1343 2.74983 10.9967 2.65741 10.845 2.59451C10.6933 2.5316 10.5306 2.49948 10.3664 2.50001H3.125C2.95924 2.50001 2.80027 2.56585 2.68306 2.68306C2.56585 2.80027 2.5 2.95925 2.5 3.12501V10.3664C2.49948 10.5306 2.5316 10.6933 2.5945 10.845C2.6574 10.9967 2.74983 11.1344 2.86641 11.25L10.625 19.0086C10.7411 19.1247 10.8789 19.2168 11.0306 19.2796C11.1822 19.3425 11.3448 19.3748 11.509 19.3748C11.6732 19.3748 11.8357 19.3425 11.9874 19.2796C12.1391 19.2168 12.2769 19.1247 12.393 19.0086L19.0086 12.393C19.1247 12.2769 19.2168 12.1391 19.2796 11.9874C19.3425 11.8357 19.3748 11.6732 19.3748 11.509C19.3748 11.3448 19.3425 11.1822 19.2796 11.0306C19.2168 10.8789 19.1247 10.7411 19.0086 10.625ZM6.5625 7.50001C6.37708 7.50001 6.19582 7.44502 6.04165 7.34201C5.88748 7.239 5.76732 7.09258 5.69636 6.92127C5.62541 6.74997 5.60684 6.56147 5.64301 6.37961C5.67919 6.19775 5.76848 6.03071 5.89959 5.89959C6.0307 5.76848 6.19775 5.67919 6.3796 5.64302C6.56146 5.60685 6.74996 5.62541 6.92127 5.69637C7.09257 5.76733 7.23899 5.88749 7.342 6.04166C7.44502 6.19583 7.5 6.37709 7.5 6.56251C7.5 6.81115 7.40123 7.0496 7.22541 7.22542C7.0496 7.40123 6.81114 7.50001 6.5625 7.50001Z"
          fill={color}
        />
      </svg>
    ),
    "pie-slice": (
      <svg
        width={size}
        height={size}
        viewBox="0 0 20 20"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.81249 9.09609C7.90753 9.04123 7.98644 8.96231 8.04129 8.86727C8.09615 8.77223 8.12502 8.66442 8.12499 8.55469V2.92969C8.12443 2.83004 8.10006 2.73198 8.0539 2.64367C8.00774 2.55536 7.94113 2.47936 7.85964 2.42202C7.77814 2.36469 7.68412 2.32766 7.5854 2.31405C7.48669 2.30043 7.38616 2.31062 7.29218 2.34375C5.46794 2.98939 3.93383 4.26457 2.96563 5.94005C1.99743 7.61554 1.65863 9.58145 2.01015 11.4844C2.02837 11.5828 2.06995 11.6754 2.1314 11.7544C2.19285 11.8333 2.27237 11.8964 2.36327 11.9383C2.44519 11.9766 2.53456 11.9963 2.62499 11.9961C2.73469 11.9961 2.84247 11.9673 2.93749 11.9125L7.81249 9.09609ZM6.87499 3.87656V8.19375L3.13437 10.3523C3.12499 10.2344 3.12499 10.1156 3.12499 10C3.1261 8.73309 3.47678 7.49106 4.13843 6.41066C4.80007 5.33025 5.74701 4.45337 6.87499 3.87656ZM18.125 10C18.1256 11.7837 17.5393 13.518 16.4564 14.9354C15.3735 16.3528 13.8543 17.3745 12.1332 17.8428C10.4121 18.3111 8.58472 18.2 6.93298 17.5267C5.28125 16.8534 3.89698 15.6553 2.99374 14.1172C2.95164 14.0461 2.92403 13.9675 2.91251 13.8857C2.901 13.8039 2.9058 13.7207 2.92665 13.6407C2.9475 13.5608 2.98398 13.4859 3.03398 13.4201C3.08398 13.3544 3.14651 13.2992 3.21796 13.2578L9.37499 9.67422V2.5C9.37499 2.33424 9.44084 2.17527 9.55805 2.05806C9.67526 1.94085 9.83423 1.875 9.99999 1.875C11.4179 1.87572 12.8109 2.24729 14.0408 2.95282C15.2706 3.65834 16.2946 4.67328 17.0109 5.89688C17.0195 5.90938 17.0273 5.92188 17.0351 5.93516C17.043 5.94844 17.0508 5.96406 17.0578 5.97812C17.7588 7.20247 18.1268 8.58916 18.125 10Z"
          fill={color}
        />
      </svg>
    ),
    "arrow-up": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={color}
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        width={size}
        height={size}
        className={className}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
        />
      </svg>
    ),
    "arrow-down": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={color}
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        width={size}
        height={size}
        className={className}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
        />
      </svg>
    ),
    "trending-up": (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.5 5.25V11.25C22.5 11.4489 22.421 11.6397 22.2803 11.7803C22.1397 11.921 21.9489 12 21.75 12C21.5511 12 21.3603 11.921 21.2197 11.7803C21.079 11.6397 21 11.4489 21 11.25V7.06031L13.2806 14.7806C13.211 14.8504 13.1283 14.9057 13.0372 14.9434C12.9462 14.9812 12.8486 15.0006 12.75 15.0006C12.6514 15.0006 12.5538 14.9812 12.4628 14.9434C12.3717 14.9057 12.289 14.8504 12.2194 14.7806L9 11.5603L2.78062 17.7806C2.63989 17.9214 2.44902 18.0004 2.25 18.0004C2.05097 18.0004 1.8601 17.9214 1.71937 17.7806C1.57864 17.6399 1.49958 17.449 1.49958 17.25C1.49958 17.051 1.57864 16.8601 1.71937 16.7194L8.46937 9.96937C8.53903 9.89964 8.62174 9.84432 8.71279 9.80658C8.80384 9.76884 8.90144 9.74941 9 9.74941C9.09856 9.74941 9.19615 9.76884 9.2872 9.80658C9.37825 9.84432 9.46097 9.89964 9.53062 9.96937L12.75 13.1897L19.9397 6H15.75C15.5511 6 15.3603 5.92098 15.2197 5.78033C15.079 5.63968 15 5.44891 15 5.25C15 5.05109 15.079 4.86032 15.2197 4.71967C15.3603 4.57902 15.5511 4.5 15.75 4.5H21.75C21.9489 4.5 22.1397 4.57902 22.2803 4.71967C22.421 4.86032 22.5 5.05109 22.5 5.25Z"
          fill={color}
        />
      </svg>
    ),
    "trending-down": (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.5 12.75V18.75C22.5 18.9489 22.421 19.1397 22.2803 19.2803C22.1397 19.421 21.9489 19.5 21.75 19.5H15.75C15.5511 19.5 15.3603 19.421 15.2197 19.2803C15.079 19.1397 15 18.9489 15 18.75C15 18.5511 15.079 18.3603 15.2197 18.2197C15.3603 18.079 15.5511 18 15.75 18H19.9397L12.75 10.8103L9.53061 14.0306C9.46096 14.1004 9.37824 14.1557 9.2872 14.1934C9.19615 14.2312 9.09855 14.2506 8.99999 14.2506C8.90143 14.2506 8.80383 14.2312 8.71278 14.1934C8.62174 14.1557 8.53902 14.1004 8.46936 14.0306L1.71936 7.28063C1.57863 7.1399 1.49957 6.94903 1.49957 6.75C1.49957 6.55098 1.57863 6.36011 1.71936 6.21938C1.8601 6.07865 2.05097 5.99959 2.24999 5.99959C2.44901 5.99959 2.63988 6.07865 2.78061 6.21938L8.99999 12.4397L12.2194 9.21938C12.289 9.14965 12.3717 9.09433 12.4628 9.05659C12.5538 9.01884 12.6514 8.99941 12.75 8.99941C12.8486 8.99941 12.9461 9.01884 13.0372 9.05659C13.1282 9.09433 13.211 9.14965 13.2806 9.21938L21 16.9397V12.75C21 12.5511 21.079 12.3603 21.2197 12.2197C21.3603 12.079 21.5511 12 21.75 12C21.9489 12 22.1397 12.079 22.2803 12.2197C22.421 12.3603 22.5 12.5511 22.5 12.75Z"
          fill={color}
        />
      </svg>
    ),
    "piggy-bank": (
      <svg
        width={size}
        height={size}
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.5938 4.12875C10.575 4.08187 10.5553 4.035 10.5352 3.98812C10.2327 3.29064 9.74327 2.69039 9.12094 2.25375H10.125C10.2245 2.25375 10.3198 2.21424 10.3902 2.14391C10.4605 2.07359 10.5 1.97821 10.5 1.87875C10.5 1.77929 10.4605 1.68391 10.3902 1.61358C10.3198 1.54326 10.2245 1.50375 10.125 1.50375H5.25C4.21317 1.50507 3.21475 1.89626 2.45301 2.59965C1.69126 3.30304 1.2219 4.26718 1.13813 5.30062C0.814201 5.38115 0.526387 5.56741 0.320244 5.82993C0.114102 6.09245 0.00140696 6.41622 0 6.75C0 6.84946 0.0395088 6.94484 0.109835 7.01517C0.180161 7.08549 0.275544 7.125 0.375 7.125C0.474456 7.125 0.569839 7.08549 0.640165 7.01517C0.710491 6.94484 0.75 6.84946 0.75 6.75C0.750087 6.61325 0.78756 6.47913 0.858364 6.36214C0.929169 6.24516 1.03061 6.14975 1.15172 6.08625C1.24506 6.92759 1.59588 7.71959 2.15625 8.35406L2.745 10.0022C2.79705 10.148 2.89293 10.2741 3.01949 10.3632C3.14605 10.4523 3.29708 10.5001 3.45187 10.5H4.04813C4.20284 10.5 4.35377 10.4522 4.48023 10.3631C4.6067 10.2739 4.70251 10.1479 4.75453 10.0022L4.84453 9.75H7.53047L7.62047 10.0022C7.67249 10.1479 7.7683 10.2739 7.89477 10.3631C8.02123 10.4522 8.17216 10.5 8.32687 10.5H8.92313C9.07784 10.5 9.22877 10.4522 9.35523 10.3631C9.4817 10.2739 9.57751 10.1479 9.62953 10.0022L10.3894 7.875H10.5C10.7984 7.875 11.0845 7.75647 11.2955 7.5455C11.5065 7.33452 11.625 7.04837 11.625 6.75V5.25C11.625 4.96783 11.519 4.69595 11.328 4.48827C11.137 4.28058 10.8749 4.15226 10.5938 4.12875ZM7.125 3.375H5.25C5.15054 3.375 5.05516 3.33549 4.98484 3.26516C4.91451 3.19484 4.875 3.09946 4.875 3C4.875 2.90054 4.91451 2.80516 4.98484 2.73483C5.05516 2.66451 5.15054 2.625 5.25 2.625H7.125C7.22446 2.625 7.31984 2.66451 7.39017 2.73483C7.46049 2.80516 7.5 2.90054 7.5 3C7.5 3.09946 7.46049 3.19484 7.39017 3.26516C7.31984 3.33549 7.22446 3.375 7.125 3.375ZM8.4375 6C8.32625 6 8.21749 5.96701 8.12499 5.9052C8.03249 5.84339 7.96039 5.75554 7.91782 5.65276C7.87524 5.54998 7.8641 5.43688 7.88581 5.32776C7.90751 5.21865 7.96109 5.11842 8.03975 5.03975C8.11842 4.96109 8.21865 4.90751 8.32776 4.88581C8.43688 4.8641 8.54998 4.87524 8.65276 4.91782C8.75554 4.96039 8.84339 5.03249 8.9052 5.12499C8.96701 5.21749 9 5.32625 9 5.4375C9 5.58668 8.94074 5.72976 8.83525 5.83525C8.72976 5.94074 8.58668 6 8.4375 6Z"
          fill={color}
        />
      </svg>
    ),
  };

  return icons[type];
};

export default Icon;
