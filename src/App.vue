<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="white"
      flat
    >
      <v-avatar
        :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
        size="32"
      ></v-avatar>

      <v-tabs
        centered
        class="ml-n9"
        color="grey darken-1"
      >
        <v-tab
          v-for="link in links"
          :key="link"
        >
          {{ link }}
        </v-tab>
      </v-tabs>

      <v-avatar
        class="hidden-sm-and-down"
        color="grey darken-1 shrink"
        size="32"
      ></v-avatar>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="2"
          >
            <v-sheet
              rounded="lg"
              min-height="268"
            >
              <!--  -->
            </v-sheet>
          </v-col>

          <v-col
            cols="12"
            sm="8"
          >
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
              <!--  -->

              <v-data-table
                :headers="headers"
                :items="cryptodata"
                :items-per-page="25"
                class="elevation-1"
              ></v-data-table>
            </v-sheet>
          </v-col>

          <v-col
            cols="12"
            sm="2"
          >
            <v-sheet
              rounded="lg"
              min-height="268"
            >
              <!--  -->
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios'

  export default {
    data: () => ({
      links: [
        'Market',
        'My Wallet',
      ],
      headers: [
        {
        text: 'Name',
        align: 'start',
        sortable: false,
        value: 'name',
        },
        {text: 'Current Price', value: 'current_price'},
        {text: 'Market Cap', value: 'market_cap'},
        {text: '24h High', value: 'high_24h'},
        {text: '24h Low', value: 'low_24h'},
        {text: 'Price Change 1H', value: 'price_change_percentage_1h_in_currency'},
        {text: 'Price Change 24H', value: 'price_change_percentage_24h_in_currency'},
        {text: 'Price Change 7D', value: 'price_change_percentage_7d_in_currency'},
        {text: 'Price Change 30D', value: 'price_change_percentage_30d_in_currency'},
      ], 
      cryptodata: [],
      errors: [], 
    }),
    created() {
      axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C30d')
        .then(response => {
          response.data.forEach(id => {
            console.log(id)
          });
          this.cryptodata = response.data
          console.log(response)
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
</script>