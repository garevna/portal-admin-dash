<template>
  <v-container>
    <v-app-bar app>
      <v-toolbar flat class="transparent">
        <v-toolbar-title>
          <h5>
            <v-icon color="#900" class="mr-2">{{ currentIcon || '$rsp' }}</v-icon>
            {{ currentUserName }}
          </h5>
          <h6>{{ currentDescription }}</h6>
        </v-toolbar-title>
        <v-spacer />
        <v-tooltip
          bottom
          color="primary"
          v-for="(item, index) in menuOptions"
          :key="index"
        >
          <template v-slot:activator="{ on }">
            <v-btn
              :disabled="!currentId"
              icon
              :color="goto !== item.value ? '#333' : 'primary'"
              dark
              v-on="on"
              @click="goto = item.value"
            >
              <v-icon>{{ item.icon }}</v-icon>
            </v-btn>
          </template>
          <span>{{ item.text }}</span>
        </v-tooltip>
      </v-toolbar>
    </v-app-bar>

    <v-row justify="center">
      <Resellers
        :id.sync="currentId"
        :goto="goto"
      />
    </v-row>
  </v-container>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'RSP',

  components: {
    Resellers: () => import('@/components/pages/users/Resellers')
  },

  data: () => ({
    currentDescription: '',
    currentIcon: '',
    currentId: null,
    currentRSP: null,
    menuOptions: [
      {
        text: 'Profile',
        description: 'Company profile',
        value: 'profile',
        icon: '$rsp'
      },
      {
        text: 'Traffic',
        description: 'Summary trafic of all end customers',
        value: 'traffic',
        icon: '$traffic'
      },
      {
        text: 'End customers',
        description: 'List of end customers',
        value: 'customers',
        icon: '$customers'
      },
      {
        text: 'Bills & payments',
        description: 'Bills and payments',
        value: 'bills',
        icon: '$bills'
      },
      {
        text: 'Archive',
        description: 'Closed requests that have been moved to archive',
        value: 'archive',
        icon: '$archive'
      }
    ],
    goto: 'profile'
  }),

  computed: {
    ...mapGetters(['getUserById']),
    rsp () {
      return this.users.filter(user => user.role === 'RSP')
    },
    currentUserName () {
      const user = this.currentId ? this.getUserById(this.currentId) : null
      return user ? user.company || user.name : ''
    }
  },

  watch: {
    goto: {
      immediate: true,
      handler (val) {
        const option = this.menuOptions.find(item => item.value === val)
        this.currentDescription = option.description
        this.currentIcon = option.icon
      }
    }
  }
}
</script>
