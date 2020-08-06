<template>
  <div>
    <div class="sidebar-button" @click="$emit('toggle-sidebar')">
      <svg
        class="sidebar-icon sidebar-closing-icon"
        fill="currentColor"
        height="2em"
        viewBox="0 0 16 16"
        width="2em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"
        />
        <path
          fill-rule="evenodd"
          d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"
        />
      </svg>
      <svg
        class="sidebar-icon sidebar-opening-icon"
        fill="currentColor"
        height="2em"
        viewBox="0 0 16 16"
        width="2em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
        />
      </svg>
    </div>
  </div>
</template>

<style lang="stylus">
.sidebar-button {
  cursor: pointer;
  display: none;
  padding-right: 0.5rem;

  .sidebar-closing-icon {
    display: none;
  }

  .sidebar-opening-icon {
    display: block;
  }
}

.sidebar-open {
  .sidebar-button {
    .sidebar-closing-icon {
      display: block;
    }

    .sidebar-opening-icon {
      display: none;
    }
  }
}

@media (max-width: $MQMobile) {
  .sidebar-button {
    display: block;
  }
}
</style>
