type Props = {
  id: string;
}

function IconsSvgSelector({id}: Props) {
  switch(id){
    case 'logo':
      return (
        <svg viewBox="0 -31 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m58.722656 82.886719c-31.945312 37.453125-51.222656 86.023437-51.222656 139.101562 0 118.457031 96.027344 214.484375 214.488281 214.484375 3.90625 0 7.792969-.101562 11.65625-.316406l47.699219-47.695312v-98.632813l-80.648438-35.972656v-143.269531zm0 0" fill="#bbe8ee"/><path d="m415.226562 315.148438c13.609376-28.167969 21.238282-59.78125 21.238282-93.160157 0-52.519531-18.886719-100.636719-50.226563-137.921875l-185.539062 26.519532v143.269531l80.644531 35.972656zm0 0" fill="#bbe8ee"/><path d="m233.644531 436.15625 1.390625-1.390625c-105.730468-13.257813-187.535156-103.449219-187.535156-212.777344 0-49.953125 17.078125-95.914062 45.71875-132.375l-34.496094-6.730469c-17.96875 21.070313-31.933594 45.65625-40.707031 72.582032-6.988281 21.445312-10.515625 43.972656-10.515625 66.523437 0 51.824219 18.378906 99.355469 48.976562 136.433594 23.042969 27.917969 53.179688 49.894531 86.863282 63.175781 24.351562 9.601563 50.882812 14.875 78.648437 14.875 3.886719 0 7.773438-.101562 11.65625-.316406zm0 0" fill="#8dcdd7"/><path d="m415.226562 315.148438c-33.074218 68.5-101.5 116.71875-181.582031 121.007812l-5.574219-13.523438c-1.023437-2.484374-1.515624-5.089843-1.515624-7.660156 0-6.351562 3.023437-12.53125 8.449218-16.402344 5.308594-3.765624 8.457032-9.878906 8.457032-16.390624v-6.847657c0-5.105469-1.945313-10.027343-5.445313-13.757812l-10.5-11.203125c-6.449219-6.875-7.257813-17.3125-1.945313-25.097656l2.820313-4.132813c7.542969-11.070313 2.371094-26.28125-10.347656-30.457031l-30.496094-10.011719c-2.800781-.921875-5.152344-2.828125-6.632813-5.375l-20.914062-35.976563c-4.550781-7.84375-15.824219-7.992187-20.589844-.269531l-5.003906 8.109375c-2.214844 3.582032-6.09375 5.703125-10.207031 5.703125-.675781 0-1.367188-.054687-2.046875-.175781-6.929688-1.191406-11.347656-8.058594-9.582032-14.859375l10.832032-41.453125c.855468-3.304688 3.085937-6.085938 6.121094-7.648438l22.066406-11.359374c4.066406-2.082032 6.511718-6.25 6.511718-10.667969 0-.867188-.09375-1.742188-.289062-2.605469-2.046875-9.222656-9.46875-16.28125-18.773438-17.871094l-14.53125-2.484375c-4.585937-.78125-8.996093-2.429687-12.976562-4.847656l-32.023438-19.4375c-7.917968-4.808594-13.75-12.410156-16.335937-21.304687l-4.449219-15.265626v-.007812c39.34375-46.128906 97.882813-75.375 163.265625-75.375 65.929688 0 124.914063 29.75 164.246094 76.566406l-8.714844 15.496094c-1.703125 3.042969-4.113281 5.554688-6.960937 7.371094-2.84375 1.820312-6.128906 2.957031-9.609375 3.238281-7.089844.566406-13.40625 4.695313-16.761719 10.957031l-7.984375 14.875c-3.898437 7.265625-11.703125 11.566406-19.9375 10.980469l-5.542969-.402344c-.921875-.0625-1.832031-.09375-2.753906-.09375-10.839844 0-21.230469 4.53125-28.617188 12.578125-4.660156 5.089844-7.878906 11.324219-9.332031 18.070313l-3.339843 15.554687c-1.183594 5.480469-3.527344 10.640625-6.894532 15.117188l-18.195312 24.28125c-4.234375 5.65625-3.023438 13.683594 2.695312 17.835937l15.769532 11.433594c3.0625 2.210937 6.953124 2.949219 10.617187 2l22.066406-5.742187c2.027344-.527344 4.09375-.78125 6.140625-.78125 6.472656 0 12.773438 2.570312 17.433594 7.304687 4.59375 4.667969 10.875 7.300781 17.425781 7.300781h12.445313c4 0 7.9375.980469 11.464844 2.859375l12.59375 6.679688c1.210937.640625 2.363281 1.382812 3.445312 2.222656zm0 0" fill="#8bdaa3"/><path d="m465.78125 280.285156c-4.472656-3.078125-7.121094-8.179687-7.121094-13.605468v-111.046876c0-23.96875-19.429687-43.398437-43.398437-43.398437s-43.398438 19.429687-43.398438 43.398437v111.046876c0 5.441406-2.671875 10.542968-7.15625 13.628906-24.253906 16.703125-39.839843 45.089844-38.617187 77.039062 1.816406 47.449219 41.046875 85.402344 88.527344 85.738282 49.582031.347656 89.882812-39.738282 89.882812-89.238282 0-30.53125-15.335938-57.476562-38.71875-73.5625zm0 0" fill="#ebecec"/><path d="m415.261719 414.285156c-33.324219 0-60.4375-27.109375-60.4375-60.4375 0-21.902344 11.902343-42.144531 31.066406-52.832031l14.773437-8.238281v-137.144532c0-8.046874 6.546876-14.597656 14.597657-14.597656s14.597656 6.550782 14.597656 14.597656v137.144532l14.773437 8.238281c19.164063 10.6875 31.066407 30.933594 31.066407 52.832031 0 33.328125-27.109375 60.4375-60.4375 60.4375zm0 0" fill="#f07383"/><path d="m232.960938 434.5.683593 1.65625c1.394531-.074219 2.785157-.164062 4.171875-.265625.042969-.003906.085938-.007813.128906-.007813 1.359376-.101562 2.714844-.21875 4.070313-.34375-3.039063-.277343-6.054687-.632812-9.054687-1.039062zm0 0" fill="#7cce92"/><path d="m75.238281 116.429688c6.765625-11.941407 14.636719-23.171876 23.484375-33.554688 35.285156-41.367188 86.011719-69.144531 143.261719-74.4375-1.425781-.132812-2.859375-.246094-4.292969-.351562-5.222656-.382813-10.464844-.585938-15.703125-.585938-51.082031 0-97.984375 17.851562-134.820312 47.65625-10.308594 8.34375-19.847657 17.632812-28.445313 27.730469l4.449219 15.265625c2.09375 7.207031 6.324219 13.566406 12.066406 18.277344zm0 0" fill="#7cce92"/><path d="m154.902344 99.816406c4.140625 0 7.5-3.355468 7.5-7.5v-12.140625c0-4.140625-3.359375-7.5-7.5-7.5-4.144532 0-7.5 3.359375-7.5 7.5v12.140625c0 4.144532 3.355468 7.5 7.5 7.5zm0 0"/><path d="m296.5625 92.316406v-12.140625c0-4.140625-3.355469-7.5-7.5-7.5-4.140625 0-7.5 3.359375-7.5 7.5v12.140625c0 4.144532 3.359375 7.5 7.5 7.5 4.144531 0 7.5-3.355468 7.5-7.5zm0 0"/><path d="m221.984375 106.296875c8.617187 0 16.707031-3.605469 22.203125-9.890625 2.722656-3.117188 2.40625-7.855469-.710938-10.582031-3.121093-2.726563-7.859374-2.40625-10.585937.710937-2.644531 3.027344-6.621094 4.761719-10.90625 4.761719-4.289063 0-8.265625-1.734375-10.910156-4.761719-2.726563-3.117187-7.464844-3.4375-10.585938-.710937-3.117187 2.726562-3.433593 7.464843-.710937 10.582031 5.496094 6.285156 13.589844 9.890625 22.207031 9.890625zm0 0"/><path d="m393.164062 155.632812v132.738282l-10.925781 6.09375c-21.535156 12.011718-34.914062 34.765625-34.914062 59.382812 0 37.460938 30.476562 67.9375 67.9375 67.9375 14.847656 0 28.964843-4.726562 40.828125-13.667968 3.308594-2.496094 3.964844-7.199219 1.472656-10.503907-2.492188-3.308593-7.195312-3.96875-10.503906-1.472656-9.238282 6.964844-20.230469 10.644531-31.792969 10.644531-29.191406 0-52.941406-23.746094-52.941406-52.9375 0-19.183594 10.433593-36.917968 27.222656-46.28125l14.769531-8.238281c2.375-1.324219 3.847656-3.832031 3.847656-6.550781v-137.144532c0-3.914062 3.1875-7.097656 7.101563-7.097656s7.097656 3.183594 7.097656 7.097656v137.144532c0 2.71875 1.472657 5.226562 3.847657 6.550781l14.769531 8.238281c16.792969 9.363282 27.222656 27.097656 27.222656 46.28125 0 7.878906-1.707031 15.472656-5.066406 22.566406-1.773438 3.742188-.175781 8.214844 3.566406 9.988282 3.746094 1.773437 8.21875.175781 9.992187-3.566406 4.316407-9.117188 6.507813-18.871094 6.507813-28.988282 0-24.617187-13.378906-47.371094-34.914063-59.382812l-10.925781-6.09375v-132.738282c0-12.183593-9.914062-22.097656-22.097656-22.097656-12.1875 0-22.101563 9.914063-22.101563 22.097656zm0 0"/><path d="m221.988281 443.972656c40.632813 0 80.996094-11.296875 115.671875-32.496094 3.109375 4.160157 6.550782 8.113282 10.351563 11.792969 18.011719 17.4375 41.644531 27.136719 66.550781 27.3125 0 0 .699219.003907.699219.003907 25.839843 0 50.132812-10.0625 68.402343-28.332032 18.273438-18.273437 28.335938-42.566406 28.335938-68.40625 0-31.851562-15.6875-61.660156-41.96875-79.742187-2.421875-1.667969-3.871094-4.445313-3.871094-7.425781v-111.046876c0-28.0625-22.832031-50.898437-50.898437-50.898437-1.5625 0-3.109375.082031-4.640625.222656-5.597656-9.007812-11.851563-17.640625-18.644532-25.71875-42.3125-50.355469-104.269531-79.238281-169.988281-79.238281-38.726562 0-76.855469 10.125-110.261719 29.277344-3.59375 2.0625-4.835937 6.644531-2.777343 10.238281 2.0625 3.59375 6.644531 4.835937 10.238281 2.777344 31.136719-17.855469 66.6875-27.292969 102.800781-27.292969 59.554688 0 115.796875 25.4375 155.132813 69.976562 0 0-6.144532 10.921876-6.144532 10.925782-2.171874 3.859375-6.210937 6.4375-10.621093 6.792968-17.222657 1.382813-23.636719 16.488282-30.757813 29.765626-3.902344 7.265624-11.164062 7.160156-18.347656 6.640624-22.527344-1.625-43.820312 14.378907-48.5625 36.460938-2.011719 9.367188-2.972656 19.871094-8.902344 27.75 0 0-18.195312 24.277344-18.199218 24.285156-6.664063 8.890625-4.675782 21.890625 4.300781 28.398438 0 0 15.769531 11.4375 15.773437 11.441406 4.707032 3.410156 11.179688 4.664062 16.898438 3.179688 0 0 22.070312-5.738282 22.078125-5.742188 5.808593-1.511719 12.125.25 16.332031 4.527344 5.96875 6.0625 14.265625 9.539062 22.769531 9.539062 5.972657 0 13.035157-1.046875 18.703125 1.203125.035156.015625.070313.03125.105469.042969-.410156.347656-.808594.703125-1.210937 1.058594-9.238282 8.117187-16.9375 18.019531-22.476563 29-9.914063 19.640625-12.777344 42.515625-8.148437 64.019531 1.847656 8.570313 4.851562 16.8125 8.933593 24.535156-27.589843 16.820313-58.855469 26.957031-91.117187 29.515625 0 0-3.519532-8.539062-3.519532-8.542968-2.667968-6.472657.664063-12.0625 5.664063-16.089844 5.175781-4.164063 8.65625-10.066406 9.839844-16.550782 1.691406-9.253906.574219-21.070312-5.304688-28.671874-3.636719-4.703126-8.15625-8.882813-12.222656-13.21875-2.34375-2.5-3.648437-6.214844-3.34375-9.761719.390625-4.511719 3.59375-7.792969 5.828125-11.492188 8.964844-14.929687 1.4375-35.003906-15.085938-40.433593 0 0-30.488281-10.007813-30.492187-10.007813-1.042969-.34375-1.941406-1.074219-2.492187-2.023437 0 0-20.902344-35.953126-20.910157-35.96875-7.246093-12.460938-25.878906-12.753907-33.460937-.445313 0 0-4.980469 8.078125-5 8.105469-2.640625 4.28125-9.460938 1.367187-8.199219-3.492188l10.832031-41.46875c.320313-1.230468 1.15625-2.273437 2.292969-2.859375l22.058594-11.355469c2.855469-1.464843 5.242187-3.558593 7.019531-6.070312 3.148438-4.445312 4.304688-10.191406 3.105469-15.503906-2.378907-10.714844-10.140625-19.160156-20.328125-22.519532-9.65625-3.183593-20.484375-2.058593-29.386719-7.46875 0 0-32.019531-19.433593-32.019531-19.433593-6.179688-3.75-10.976563-9.925781-13.03125-16.992188l-3.304688-11.34375c8.367188-9.425781 17.648438-18.144531 27.644532-25.945312 3.265624-2.550781 3.84375-7.265625 1.296874-10.527344-2.550781-3.265625-7.265624-3.847656-10.527343-1.296875-11.851563 9.253906-22.773438 19.707031-32.460938 31.066406-.039062.046875-.074219.09375-.109375.140625-34.121094 40.066407-52.910156 91.140625-52.910156 143.84375 0 59.292969 23.089844 115.039063 65.019531 156.96875 41.925781 41.925781 97.671875 65.015625 156.96875 65.015625zm229.171875-288.339844v111.046876c0 7.921874 3.875 15.316406 10.371094 19.785156 22.207031 15.277344 35.46875 40.46875 35.46875 67.382812 0 44.410156-37.144531 81.738282-81.738281 81.738282h-.589844c-42.882813-.160157-79.449219-35.742188-81.085937-78.523438-.992188-26.015625 10.671874-51.367188 31.140624-67.457031 7.480469-5.882813 14.636719-12.703125 14.636719-22.925781 0 0 0-111.007813 0-111.046876 0-19.316406 16.597657-35.898437 35.898438-35.898437 19.796875 0 35.898437 16.105469 35.898437 35.898437zm-117.421875 108.308594c-4.5 0-8.925781-1.855468-12.082031-5.0625-7.902344-8.03125-19.898438-11.371094-30.804688-8.519531l-22.0625 5.738281c-1.492187.386719-3.097656.082032-4.332031-.8125 0 0-15.734375-11.40625-15.765625-11.429687-2.304687-1.671875-2.804687-4.992188-1.101562-7.265625l18.1875-24.269532c3.980468-5.292968 6.828125-11.53125 8.234375-18.054687 2.433593-4.867187 2.300781-11.859375 3.746093-17.167969 2.605469-9.59375 9.808594-17.535156 19.09375-21.0625 8.816407-3.34375 18.320313-.148437 27.320313-2.238281 14.765625-3.433594 20.183594-17.117187 26.625-29.121094 2.140625-3.992187 6.234375-6.664062 10.753906-7.027343 9.332031-.75 17.933594-6.230469 22.503907-14.40625l3.257812-5.789063c2.78125 3.691406 5.445312 7.484375 7.980469 11.355469-18.5 7.902344-30.929688 26.699218-30.929688 46.824218v111.046876c0 .84375-.128906 1.6875-.367187 2.5l-2.820313-1.5c-8.574219-4.546876-18.078125-3.738282-27.4375-3.738282zm-278.164062-165.050781.394531 1.355469c3.121094 10.71875 10.09375 19.816406 19.648438 25.621094 0 0 32.015624 19.429687 32.019531 19.433593 9.15625 5.554688 19.808593 6.546875 30.140625 8.3125 6.332031 1.082031 11.324218 5.835938 12.71875 12.128907.441406 1.980468-.535156 4.035156-2.339844 4.957031l-22.070312 11.363281c-4.933594 2.539062-8.558594 7.070312-9.941407 12.417969 0 0-10.832031 41.460937-10.832031 41.460937-2.074219 7.933594 1.253906 16.640625 8.121094 21.183594 9.089844 6.015625 21.640625 3.214844 27.355468-6.027344 0 0 4.976563-8.0625 5.003907-8.113281 2.066406-3.347656 5.519531-2.097656 7.722656.105469 0 0 20.910156 35.96875 20.910156 35.96875 2.304688 3.960937 6.238281 7.246094 10.78125 8.738281 0 0 30.445313 9.992187 30.496094 10.011719 7.832031 2.570312 11.132813 12.292968 6.488281 19.105468-2.761718 4.050782-5.480468 7.90625-6.757812 12.722657-2.371094 8.976562-.082032 18.730469 6.609375 25.867187 0 0 10.488281 11.1875 10.503906 11.199219 4.023437 4.292969 3.414063 10.046875 3.414063 15.476563 0 4.082031-1.980469 7.921874-5.316407 10.289062-7.546875 5.382812-12.003906 14.59375-11.554687 23.859375.214844 4.5 1.792968 8.535156 3.484375 12.644531-.195313 0-.390625 0-.585938 0-114.132812 0-206.988281-92.851562-206.988281-206.984375 0-44.429687 14.320312-87.617187 40.574219-123.097656zm0 0"/></svg>
      );
    case 'themes':
      return(
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
          width="40px" height="40px" viewBox="0 0 907.000000 1280.000000"
          preserveAspectRatio="xMidYMid meet">
          <metadata>
          Created by potrace 1.15, written by Peter Selinger 2001-2017
          </metadata>
          <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
          fill="#000000" stroke="none">
          <path d="M5537 12783 c-61 -21 -139 -90 -167 -148 -22 -45 -230 -1067 -230
          -1130 0 -93 65 -198 156 -251 135 -79 340 -11 402 133 29 69 225 1053 224
          1129 -1 104 -58 197 -152 248 -67 36 -161 44 -233 19z"/>
          <path d="M2203 12486 c-88 -28 -171 -113 -194 -200 -24 -90 -13 -134 174 -644
          98 -266 184 -496 191 -511 20 -38 97 -107 143 -127 58 -26 176 -24 235 5 106
          51 168 148 168 263 0 60 -11 97 -114 380 -280 766 -266 734 -338 787 -77 57
          -177 74 -265 47z"/>
          <path d="M8676 11234 c-55 -20 -90 -49 -541 -446 -451 -399 -447 -395 -453
          -528 -3 -58 1 -85 16 -121 70 -161 256 -228 409 -147 60 32 883 759 915 809
          124 191 -16 450 -242 448 -36 0 -83 -7 -104 -15z"/>
          <path d="M190 10713 c-28 -10 -66 -37 -102 -73 -45 -45 -60 -69 -73 -115 -21
          -69 -16 -143 13 -207 17 -39 643 -818 745 -928 61 -66 125 -94 212 -94 115 -1
          214 59 265 161 36 69 36 188 0 256 -31 58 -719 906 -773 952 -73 63 -190 82
          -287 48z"/>
          <path d="M4250 10714 c-192 -17 -294 -29 -415 -50 -625 -107 -1207 -363 -1680
          -740 -136 -108 -394 -365 -500 -499 -495 -620 -744 -1379 -745 -2266 0 -608
          118 -1124 367 -1599 455 -868 1316 -1540 2667 -2082 109 -44 249 -98 310 -120
          181 -66 608 -208 624 -208 9 0 12 -3 9 -7 -9 -8 -83 -13 -832 -58 -1350 -79
          -1573 -98 -1749 -150 -153 -46 -250 -165 -250 -311 -1 -120 69 -231 179 -287
          89 -44 337 -103 680 -161 300 -50 447 -71 1638 -233 156 -21 200 -30 175 -35
          -18 -3 -208 -18 -423 -32 -738 -50 -979 -70 -1245 -107 -544 -74 -882 -205
          -968 -375 -87 -172 -15 -364 171 -453 78 -37 178 -63 347 -90 275 -43 519 -68
          1515 -151 577 -48 1005 -92 999 -102 -3 -4 -15 -8 -27 -8 -35 0 -121 -45 -159
          -82 -87 -87 -109 -229 -54 -341 46 -96 159 -167 264 -167 42 0 314 58 527 112
          282 72 469 143 581 223 251 179 225 503 -52 647 -161 83 -371 132 -854 197
          -198 27 -842 91 -916 91 -27 0 -43 4 -39 10 3 5 35 10 69 10 66 0 471 32 636
          51 582 64 992 154 1141 250 122 78 187 200 175 327 -18 201 -177 322 -531 406
          -247 60 -661 131 -1115 192 -47 7 -23 10 160 25 622 51 928 93 1116 155 142
          46 220 105 275 206 30 57 33 71 34 148 0 76 -3 92 -33 152 -71 144 -201 214
          -607 324 -383 103 -1000 293 -1055 325 -10 5 7 9 47 9 72 0 337 33 436 55 l68
          14 36 -40 c20 -22 57 -52 82 -67 41 -24 56 -27 138 -27 l91 0 129 65 c553 279
          1062 714 1414 1212 348 490 547 1021 631 1678 21 164 17 710 -5 875 -62 446
          -176 822 -361 1190 -511 1014 -1450 1718 -2501 1875 -135 20 -498 34 -615 24z"/>
          </g>
        </svg>
      );
    case 'snow':
      return (
        <svg viewBox="-31 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m358.75 284.402344c46.035156 0 83.351562-37.316406 83.351562-83.351563 0-42.738281-32.167968-77.953125-73.609374-82.78125-10.21875-62.816406-64.714844-110.769531-130.417969-110.769531-51.910157 0-96.820313 29.933594-118.433594 73.480469-3.035156-.273438-6.105469-.417969-9.210937-.417969-56.289063 0-101.917969 45.628906-101.917969 101.917969 0 56.289062 45.628906 101.921875 101.917969 101.921875zm0 0" fill="#ebecec"></path><path d="m124.433594 284.402344c-1.5625-4.574219-3.335938-9.257813-5.339844-14.058594-52.742188-126.308594 51.773438-243.875 52.917969-245.15625-22.480469 13.003906-40.78125 32.4375-52.375 55.792969-3.03125-.273438-6.101563-.417969-9.207031-.417969-56.289063 0-101.921876 45.628906-101.921876 101.917969 0 56.289062 45.632813 101.917969 101.921876 101.917969h14.003906zm0 0" fill="#d9d9d9"></path><path d="m388.011719 392.90625h-11.988281l8.136718-11.054688c4.742188-6.449218 3.363282-15.519531-3.085937-20.261718-6.445313-4.746094-15.515625-3.367188-20.261719 3.082031l-20.777344 28.234375h-21.011718v-21.011719l28.238281-20.777343c6.445312-4.742188 7.824219-13.8125 3.082031-20.261719-4.742188-6.445313-13.816406-7.828125-20.261719-3.082031l-11.054687 8.132812v-11.984375c0-8.007813-6.492188-14.496094-14.496094-14.496094s-14.492188 6.488281-14.492188 14.496094v11.984375l-11.054687-8.132812c-6.445313-4.746094-15.515625-3.367188-20.261719 3.082031-4.742187 6.449219-3.363281 15.519531 3.082032 20.261719l28.234374 20.777343v21.011719h-20.140624l-20.777344-28.234375c-4.738282-6.445313-13.8125-7.828125-20.261719-3.082031-6.445313 4.742187-7.828125 13.8125-3.082031 20.261718l8.136718 11.054688h-11.988281c-8.003906 0-14.492187 6.488281-14.492187 14.492188 0 8.003906 6.488281 14.492187 14.492187 14.492187h11.988281l-8.136718 11.054687c-4.742188 6.449219-3.363282 15.519532 3.082031 20.265626 2.589844 1.902343 5.597656 2.820312 8.578125 2.820312 4.453125 0 8.84375-2.046875 11.683594-5.90625l20.777344-28.234375h20.140624v20.140625l-28.234374 20.777344c-6.445313 4.742187-7.824219 13.816406-3.082032 20.261718 2.839844 3.859376 7.230469 5.90625 11.683594 5.90625 2.984375 0 5.992188-.917968 8.578125-2.824218l11.054687-8.132813v11.988281c0 8.003907 6.492188 14.492188 14.496094 14.492188s14.492188-6.488281 14.492188-14.492188v-11.988281l11.054687 8.136719c2.585938 1.902344 5.59375 2.820312 8.578125 2.820312 4.453125 0 8.84375-2.042968 11.683594-5.90625 4.746094-6.445312 3.367188-15.515624-3.082031-20.261718l-28.234375-20.777344v-20.140625h21.011718l20.777344 28.238281c2.839844 3.859375 7.230469 5.902344 11.683594 5.902344 2.984375 0 5.992188-.917969 8.578125-2.820312 6.445313-4.742188 7.828125-13.816407 3.082031-20.261719l-8.132812-11.054688h11.988281c8.003906 0 14.492187-6.492187 14.492187-14.496093 0-8.003907-6.492187-14.492188-14.496093-14.492188zm0 0" fill="#bbe8ee"></path><path d="m188.082031 270.34375h-11.988281l8.132812-11.054688c4.746094-6.445312 3.367188-15.519531-3.082031-20.261718-6.445312-4.746094-15.519531-3.367188-20.261719 3.082031l-20.777343 28.234375h-21.011719v-21.011719l28.234375-20.777343c6.445313-4.742188 7.828125-13.8125 3.082031-20.261719-4.742187-6.445313-13.8125-7.828125-20.261718-3.082031l-11.054688 8.136718v-11.988281c0-8.003906-6.488281-14.496094-14.492188-14.496094-8.003906 0-14.492187 6.492188-14.492187 14.496094v11.988281l-11.054687-8.136718c-6.445313-4.742188-15.519532-3.363282-20.261719 3.082031-4.746094 6.449219-3.363281 15.519531 3.082031 20.261719l28.234375 20.777343v21.011719h-20.140625l-20.777344-28.234375c-4.742187-6.445313-13.816406-7.832031-20.261718-3.085937-6.449219 4.746093-7.828126 13.816406-3.085938 20.261718l8.136719 11.058594h-11.988281c-8.003907 0-14.492188 6.488281-14.492188 14.492188 0 8.003906 6.488281 14.492187 14.492188 14.492187h11.988281l-8.136719 11.054687c-4.742188 6.445313-3.363281 15.519532 3.085938 20.261719 2.585937 1.90625 5.59375 2.820313 8.578124 2.820313 4.449219 0 8.84375-2.042969 11.683594-5.902344l20.777344-28.234375h20.140625v20.140625l-28.238281 20.777344c-6.445313 4.742187-7.824219 13.8125-3.082032 20.261718 2.839844 3.859376 7.234376 5.902344 11.683594 5.902344 2.984375 0 5.992188-.917968 8.582032-2.820312l11.054687-8.136719v11.988281c0 8.003906 6.488281 14.496094 14.492187 14.496094 8.003907 0 14.492188-6.492188 14.492188-14.496094v-11.988281l11.054688 8.136719c2.585937 1.902344 5.59375 2.820312 8.578124 2.820312 4.453126 0 8.84375-2.042968 11.683594-5.902344 4.746094-6.449218 3.367188-15.519531-3.082031-20.261718l-28.234375-20.777344v-20.140625h21.011719l20.777343 28.234375c2.839844 3.859375 7.230469 5.902344 11.683594 5.902344 2.984375 0 5.992188-.914063 8.578125-2.820313 6.449219-4.742187 7.828125-13.816406 3.085938-20.261719l-8.136719-11.054687h11.988281c8.003907 0 14.492188-6.488281 14.492188-14.492187 0-8.003907-6.488281-14.492188-14.492188-14.492188zm0 0" fill="#8dcdd7"></path><path d="m152.863281 116v11.753906c0 4.140625 3.359375 7.5 7.5 7.5 4.144531 0 7.5-3.359375 7.5-7.5v-11.753906c0-4.144531-3.355469-7.5-7.5-7.5-4.140625 0-7.5 3.355469-7.5 7.5zm0 0"></path><path d="m282.746094 116v11.753906c0 4.140625 3.359375 7.5 7.5 7.5s7.5-3.359375 7.5-7.5v-11.753906c0-4.144531-3.359375-7.5-7.5-7.5s-7.5 3.355469-7.5 7.5zm0 0"></path><path d="m235.6875 121.996094c-2.515625 2.878906-6.300781 4.53125-10.382812 4.53125-4.082032 0-7.867188-1.652344-10.382813-4.53125-2.726563-3.117188-7.460937-3.433594-10.582031-.710938-3.117188 2.730469-3.4375 7.464844-.710938 10.585938 5.363282 6.136718 13.265625 9.65625 21.675782 9.65625 8.410156 0 16.3125-3.519532 21.675781-9.65625 2.726562-3.117188 2.40625-7.855469-.710938-10.585938-3.121093-2.726562-7.855469-2.40625-10.582031.710938zm0 0"></path><path d="m410.003906 407.398438c0-11.214844-8.433594-20.492188-19.292968-21.828126 3.109374-4.59375 4.355468-10.101562 3.519531-15.617187-1.609375-10.582031-11.035157-18.6875-21.734375-18.6875-6.96875 0-13.597656 3.351563-17.722656 8.960937l-18.53125 25.179688h-9.71875v-9.71875l25.179687-18.53125c4.734375-3.480469 7.824219-8.59375 8.707031-14.402344 2-13.125-8.503906-25.304687-21.753906-25.304687-4.417969 0-8.652344 1.300781-12.296875 3.769531-1.335937-10.855469-10.617187-19.289062-21.828125-19.289062-11.214844 0-20.492188 8.433593-21.828125 19.289062-3.648437-2.46875-7.878906-3.769531-12.300781-3.769531-13.265625 0-23.746094 12.199219-21.753906 25.304687.886718 5.808594 3.976562 10.921875 8.707031 14.402344l25.183593 18.53125v9.71875h-8.847656l-18.53125-25.179688c-4.125-5.609374-10.753906-8.960937-17.722656-8.960937-10.726562 0-20.117188 8.089844-21.730469 18.6875-.839843 5.515625.40625 11.023437 3.515625 15.617187-10.859375 1.335938-19.292968 10.617188-19.292968 21.828126 0 11.214843 8.4375 20.492187 19.292968 21.828124-3.109375 4.59375-4.355468 10.105469-3.515625 15.621094 1.613281 10.601563 11.003907 18.683594 21.730469 18.683594 6.96875 0 13.597656-3.347656 17.722656-8.957031l18.53125-25.179688h8.847656v8.847657l-25.179687 18.527343c-4.730469 3.480469-7.824219 8.597657-8.707031 14.40625-2 13.125 8.492187 25.300781 21.753906 25.300781 4.417969 0 8.652344-1.300781 12.296875-3.765624 1.335937 10.855468 10.617187 19.289062 21.828125 19.289062 11.214844 0 20.492188-8.433594 21.828125-19.292969 3.648437 2.46875 7.878906 3.769531 12.300781 3.769531 13.253906 0 23.746094-12.199218 21.753906-25.300781-.886718-5.808593-3.976562-10.925781-8.707031-14.40625l-25.183593-18.53125v-8.847656h9.71875l18.53125 25.179687c4.125 5.613282 10.753906 8.960938 17.722656 8.960938 10.734375 0 20.117187-8.082031 21.730468-18.6875.839844-5.511719-.40625-11.023438-3.515624-15.617188 10.859374-1.335937 19.292968-10.617187 19.292968-21.828124zm-21.992187 6.992187s-11.960938 0-11.988281 0c-6.03125 0-9.617188 7.085937-6.039063 11.945313 0 0 8.121094 11.039062 8.132813 11.054687 2.265624 3.078125 1.574218 7.523437-1.488282 9.78125-3.078125 2.265625-7.511718 1.585937-9.773437-1.488281l-20.777344-28.238282c-1.414063-1.917968-3.65625-3.054687-6.042969-3.054687h-21.011718c-4.140626 0-7.5 3.359375-7.5 7.5v20.140625c0 2.386719 1.132812 4.628906 3.054687 6.042969 0 0 28.191406 20.746093 28.238281 20.777343 3.070313 2.261719 3.742188 6.707032 1.484375 9.777344-2.261719 3.074219-6.710937 3.742188-9.773437 1.484375 0 0-11.046875-8.125-11.058594-8.132812-4.871094-3.585938-11.945312.011719-11.945312 6.039062v11.988281c0 3.855469-3.136719 6.992188-6.992188 6.992188s-6.992188-3.136719-6.992188-6.992188c0 0 0-11.9375 0-11.988281 0-6.003906-7.125-9.585937-11.945312-6.039062 0 0-11.027344 8.113281-11.054688 8.132812-3.082031 2.269531-7.511718 1.589844-9.777343-1.484375-2.265625-3.082031-1.585938-7.519531 1.488281-9.777344l28.234375-20.777343c1.917969-1.414063 3.054687-3.65625 3.054687-6.042969v-20.140625c0-4.140625-3.359374-7.5-7.5-7.5h-20.140624c-2.386719 0-4.628907 1.136719-6.042969 3.054687 0 0-20.742188 28.1875-20.777344 28.238282-2.261719 3.074218-6.710937 3.742187-9.773437 1.484375-3.070313-2.257813-3.742188-6.714844-1.488282-9.777344 0 0 8.113282-11.027344 8.132813-11.054687 3.574219-4.855469-.03125-11.945313-6.039063-11.945313h-11.988281c-3.855469 0-6.992187-3.136719-6.992187-6.992187 0-3.855469 3.136718-6.992188 6.992187-6.992188h11.988281c5.992188 0 9.601563-7.109375 6.039063-11.945312 0 0-8.125-11.042969-8.132813-11.054688-2.265625-3.078125-1.585937-7.515625 1.488282-9.777344 3.078124-2.265625 7.511718-1.589844 9.777343 1.488282l20.777344 28.234374c1.410156 1.921876 3.65625 3.054688 6.039063 3.054688h20.140624c4.144532 0 7.5-3.359375 7.5-7.5v-21.011719c0-2.386719-1.132812-4.628906-3.054687-6.042969 0 0-28.203125-20.753906-28.234375-20.777343-3.074219-2.261719-3.75-6.703125-1.488281-9.773438 2.261719-3.074219 6.707031-3.746093 9.777343-1.488281 0 0 11.03125 8.117188 11.054688 8.136719 4.867188 3.578125 11.945312-.015625 11.945312-6.042969v-11.984375c0-3.855469 3.136719-6.996094 6.992188-6.996094s6.992188 3.136719 6.992188 6.996094v11.984375c0 6.023438 7.09375 9.617188 11.945312 6.042969 0 0 11.027344-8.113281 11.058594-8.136719 3.085937-2.269531 7.511718-1.585938 9.773437 1.488281 2.265625 3.074219 1.585938 7.519531-1.484375 9.777344l-28.234375 20.777344c-1.921875 1.414062-3.054687 3.65625-3.054687 6.039062v21.011719c0 4.144531 3.355468 7.5 7.5 7.5h21.011718c2.382813 0 4.625-1.132812 6.039063-3.054688 0 0 20.734375-28.171874 20.777344-28.234374 2.265625-3.078126 6.707031-3.742188 9.777343-1.484376 3.070313 2.257813 3.746094 6.707032 1.484376 9.773438 0 0-8.121094 11.039062-8.132813 11.058594-3.574219 4.855468.023437 11.945312 6.039063 11.945312h11.988281c3.855469 0 6.992187 3.136719 6.992187 6.992188 0 3.851562-3.136718 6.988281-6.992187 6.988281zm0 0"></path><path d="m449.601562 201.050781c0-44.230469-31.742187-81.722656-74.699218-89.410156-5.347656-26.3125-18.078125-50.304687-37.035156-69.671875-2.898438-2.957031-7.648438-3.007812-10.605469-.113281-2.960938 2.898437-3.011719 7.648437-.117188 10.605469 18.078125 18.472656 29.816407 41.644531 33.945313 67.015624.539062 3.308594 3.203125 5.859376 6.535156 6.246094 38.179688 4.445313 66.972656 36.832032 66.972656 75.328125 0 41.824219-34.023437 75.851563-75.847656 75.851563h-150.144531c-2.613281-6.839844-8.511719-11.960938-15.777344-13.539063-.023437-.007812-.046875-.011719-.070313-.015625-.648437-.140625-1.304687-.261718-1.976562-.339844.285156-.417968.53125-.851562.785156-1.28125 5.527344-9.5 2.96875-22.160156-5.984375-28.746093-9.613281-7.066407-23.667969-4.933594-30.742187 4.683593l-18.527344 25.179688h-9.71875v-9.71875l25.179688-18.527344c10.265624-7.554687 11.707031-23.179687 3.148437-32.597656-7.113281-7.75-19.691406-9.285156-28.496094-3.34375-1.332031-10.855469-10.613281-19.292969-21.828125-19.292969-10.953125 0-20.492187 8.429688-21.839844 19.285157-8.277343-5.589844-20.058593-4.664063-27.335937 2.199218-9.652344 9.09375-8.796875 25.675782 1.878906 33.648438.042969.03125.082031.066406.125.101562l25.179688 18.527344v9.71875h-8.847657s-18.527343-25.179688-18.53125-25.183594c-4.925781-6.84375-14-10.183594-22.207031-8.488281-.421875.085937-3.996093 1.175781-3.96875 1.21875-8.554687-14.480469-13.042969-30.898437-13.042969-47.910156 0-52.0625 42.355469-94.417969 94.417969-94.417969 2.792969 0 5.664063.128906 8.539063.386719 3.078125.28125 6.015625-1.363281 7.386718-4.132813 10.171876-20.496094 25.785157-37.808594 45.152344-50.070312 19.890625-12.589844 42.910156-19.246094 66.570313-19.246094 23.828125 0 46.996093 6.753906 66.992187 19.527344 3.488282 2.226562 8.128906 1.207031 10.359375-2.285156 2.226563-3.488282 1.207031-8.128907-2.285156-10.355469-22.414063-14.320313-48.371094-21.886719-75.066406-21.886719-26.503907 0-52.300781 7.460938-74.589844 21.574219-20.261719 12.828125-36.855469 30.597656-48.242187 51.597656-1.617188-.074219-3.226563-.109375-4.8125-.109375-60.332032 0-109.417969 49.085938-109.417969 109.417969 0 20.828125 5.820312 40.882812 16.859375 58.347656-1.019532 2.039063-1.742188 4.242187-2.09375 6.5625-.839844 5.515625.40625 11.023437 3.515625 15.617187-10.859375 1.335938-19.292969 10.617188-19.292969 21.828126 0 11.214843 8.433594 20.492187 19.292969 21.828124-3.109375 4.59375-4.355469 10.105469-3.519531 15.617188.886718 5.808594 3.976562 10.925781 8.707031 14.40625 9.652343 7.097656 23.65625 4.964844 30.75-4.679688l18.53125-25.179687h8.847656v8.847656l-25.183594 18.53125c-9.765625 7.1875-11.863281 20.980469-4.675781 30.746094 4.128906 5.609375 10.753906 8.960937 17.722656 8.960937 4.421875 0 8.652344-1.300781 12.300782-3.769531 1.335937 10.859375 10.613281 19.292969 21.828124 19.292969 11.210938 0 20.492188-8.433594 21.828126-19.292969 3.644531 2.46875 7.878906 3.769531 12.296874 3.769531 6.972657 0 13.597657-3.351562 17.726563-8.960937 3.480469-4.730469 4.914063-10.535156 4.027344-16.34375-.882813-5.804687-3.972657-10.921875-8.707031-14.402344l-25.179688-18.53125v-8.847656h9.71875s18.515625 25.164063 18.53125 25.179687c7.097656 9.648438 21.113281 11.769532 30.746094 4.679688 4.730468-3.480469 7.824218-8.597656 8.710937-14.40625.835938-5.515625-.410156-11.023438-3.519531-15.617188 8.460938-1.042968 15.433594-6.917968 18.105469-14.765624h149.863281c50.09375.003906 90.851562-40.753907 90.851562-90.847657zm-261.519531 90.777344s-11.976562 0-11.988281 0c-6.027344 0-9.617188 7.089844-6.042969 11.945313 0 0 8.128907 11.046874 8.136719 11.054687 2.261719 3.078125 1.582031 7.519531-1.488281 9.777344-3.078125 2.265625-7.515625 1.585937-9.773438-1.488281l-20.777343-28.234376c-1.414063-1.917968-3.65625-3.054687-6.042969-3.054687h-21.011719c-4.140625 0-7.5 3.359375-7.5 7.5v20.140625c0 2.386719 1.132812 4.628906 3.054688 6.042969 0 0 28.191406 20.742187 28.238281 20.777343 3.0625 2.253907 3.734375 6.71875 1.484375 9.773438-2.261719 3.078125-6.703125 3.75-9.777344 1.488281l-11.054688-8.132812c-2.277343-1.675781-5.304687-1.929688-7.828124-.652344-2.523438 1.277344-4.117188 3.863281-4.117188 6.691406v11.988281c0 3.855469-3.136719 6.992188-6.992188 6.992188-3.855468 0-6.992187-3.136719-6.992187-6.992188 0 0 0-11.964843 0-11.988281 0-4.140625-3.515625-7.582031-7.648437-7.5-1.507813.03125-3.082032 1.460938-4.296876 1.460938 0 0-11.046874 8.128906-11.054687 8.132812-3.082031 2.269531-7.511719 1.59375-9.777344-1.484375-2.285156-3.105468-1.617187-7.492187 1.488281-9.777344l28.234376-20.777343c1.921874-1.414063 3.054687-3.65625 3.054687-6.042969v-20.140625c0-4.140625-3.355469-7.5-7.5-7.5h-20.140625c-2.382812 0-4.625 1.136719-6.039062 3.054687 0 0-20.726563 28.167969-20.777344 28.234376-2.265625 3.078124-6.703125 3.75-9.777344 1.488281s-3.753906-6.695313-1.488281-9.777344c0 0 8.121093-11.035156 8.136719-11.054687 3.589843-4.878907-.015626-11.945313-6.042969-11.945313h-11.988281c-3.855469 0-6.992188-3.136719-6.992188-6.992187 0-3.855469 3.136719-6.992188 6.992188-6.992188h11.988281c2.828125 0 5.417969-1.589844 6.691406-4.117188 1.277344-2.523437 1.023437-5.550781-.652344-7.828124 0 0-8.117187-11.035157-8.132812-11.054688-2.214844-3.007812-1.539063-7.523438 1.457031-9.753906.007812-.007813.019531-.015625.027344-.023438 3.023437-2.199218 7.527344-1.574218 9.777344 1.488282l20.777343 28.234374c1.414063 1.921876 3.65625 3.054688 6.039063 3.054688h20.140625c4.015625 0 7.5-3.367188 7.5-7.5v-21.011719c0-2.386719-1.132813-4.628906-3.054688-6.042969l-28.234375-20.777343c-.015625-.007813-.027344-.023438-.039062-.03125-2.992188-2.234375-3.664063-6.734375-1.449219-9.746094 2.21875-3.011719 6.734375-3.726563 9.777344-1.484375 0 0 11.035156 8.117188 11.054687 8.132812 4.867188 3.582032 11.945313-.027343 11.945313-6.039062v-11.988281c0-3.730469 3.144531-6.992188 6.992187-6.992188 3.855469 0 6.996094 3.136719 6.996094 6.992188v11.988281c0 6.007812 7.109375 9.597656 11.941406 6.039062 0 0 11.03125-8.117187 11.058594-8.136718 3.015625-2.21875 7.558594-1.515625 9.773438 1.488281 2.246093 3.046875 1.550781 7.542969-1.484376 9.777344l-28.234374 20.777343c-1.921876 1.414063-3.054688 3.65625-3.054688 6.039063v21.015625c0 4.140625 3.355469 7.5 7.5 7.5h21.011719c2.382812 0 4.625-1.136719 6.039062-3.058594l20.777344-28.234375c2.246094-3.050781 6.71875-3.734375 9.777344-1.484375 2.992187 2.199219 3.746093 6.707032 1.484375 9.773438 0 0-8.121094 11.039062-8.132813 11.058594-3.578125 4.859374.039063 11.945312 6.039063 11.945312h11.988281c3.699219 0 6.863281 3.085938 6.976563 6.777344.117187 3.867187-3.109376 7.207031-6.972657 7.207031zm0 0"></path></svg>
      );
    default:
      return null;
  }
}

export default IconsSvgSelector;