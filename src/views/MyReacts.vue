<template>
    <div id="content">
        <div class="row page-title-path">
            <div class="col">
                <h2>{{ $t('main-title') }}</h2>
            </div>
            <div class="col right">
                <p>Home > <span> {{ $t('main-title') }}</span></p>
            </div>

        </div>
        <section class="component-section">
            <div v-if="!(this.getReacts === null)" class="row">
                <div class="col s12 l8">
                    <table class = "striped bordered">
                        <thead>
                        <tr>
                            <th style="width: 4%">{{ $t('table.id') }}</th>
                            <th>{{ $t('table.name') }}</th>
                            <th>{{ $t('table.created') }}</th>
                            <th style="width: 25%">{{ $t('table.actions') }}</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(React, index) in displayReacts" :key="React.id" :data-url="'/dashboard/Reacts/' + React.id">
                            <td>{{index + 1}}</td>
                            <td>{{React.nom}}</td>
                            <td>30/04/2019</td>
                            <td class="action not-allowed" width="5%">
                                <div class="switch">
                                    <label>
                                        <input type="checkbox" :checked="React.activated === true" @click="switchStatus(React.id, React.activated)">
                                        <span class="lever"></span>
                                    </label>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <div class="right">
                        <ul v-if="pages.length > 1" class="pagination">
                            <li v-if="page != 1" @click="page--"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
                            <li v-for="pageNumber in pages.slice(page-1, page+5)" @click="page = pageNumber" :class="{active: page == pageNumber }"><a href="#!">{{pageNumber}}</a></li>
                            <li class="waves-effect"  @click="page++" v-if="page < pages.length"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
                        </ul>
                    </div>
                </div>
                <div class="col l4 s12">
                    <div class="help">
                        <h4>{{ $t('help') }}</h4>
                        <p v-html="this.$t('text')"></p>
                    </div>
                </div>
            </div>
            <div v-else class="row">
                <div  class="col s12">
                    <div class="alert alert-info" role="alert">
                        {{ $t('no-React') }}
                    </div>
                    <router-link :to="{ name: 'add-react'}" class="waves-effect waves-light btn">
                        {{ $t('add-React') }}
                    </router-link>
                </div>
            </div>
        </section>
        <!-- Modal Structure -->
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: "my-reacts",
        data(){
            return{
                CreatedDate: '',
                page: 1,
                perPage: 3,
                pages: [],
            }
        },
        computed: {
            ...mapGetters(['getReacts']),
            displayReacts () {
                return this.paginate(this.getReacts);
            }
        },
        methods: {
            getDateCreated(data) {
                return data.substring(0, 10);
            },
            setPages() {
                this.pages = [];
                let numberOfPages = Math.ceil(this.getReacts.length / this.perPage);
                for (let index = 1; index <= numberOfPages; index++) {
                    this.pages.push(index);
                }
            },
            paginate(Reacts) {
                let page = this.page;
                let perPage = this.perPage;
                let from = (page * perPage) - perPage;
                let to = (page * perPage);
                return Reacts.slice(from, to);
            },
            switchStatus(id, status) {
                console.log("status " + status)
                if (status === true) {
                    var payload = {
                        'link': '/trigger-service/DesactivateReact/' + id,
                        'mutation': '',
                        'all': false
                    };

                } else {
                    var payload = {
                        'link': '/trigger-service/ActivateReact/' + id,
                        'mutation': '',
                        'all': false
                    }
                }
                this.$store.dispatch('getRequest', payload);

            },
        },
        watch: {
            getReacts() {
                this.setPages();
            }
        },
        created() {
            let payload = {
                'link': '/trigger-service/UserReact/' + localStorage.getItem('userId') ,
                'mutation': 'setReacts',
                'all': false
            };
            this.$store.dispatch('getRequest', payload);
        },
        mounted(){
            $("tr").find("td").click(function(){
                if (!($(this).hasClass("not-allowed"))){
                    window.location = $(this).parent("tr").data('url');
                }
            });
            $('.modal').modal();
        }
    }
</script>
<i18n>
    {
    "en": {
    "main-title": "My Triggers",
    "no-React": "No Trigger to display",
    "add-React": "New Trigger",
    "help": "Help",
    "text": "Trigger works with ThingHTTP, ThingTweet, and MATLAB Analysis apps to perform actions when channel data meets a certain condition. For example, you can have a mobile app report your latitude and longitude to a ThingSpeak channel. When your position is within a certain distance of your house, have ThingHTTP turn on your living room lights <br>To create a new reaction, click <strong>New React</strong>.",
    "table": {
    "id": "#",
    "name": "Name",
    "created": "Created",
    "actions": "Actions"
    }
    },
    "fr": {
    "main-title": "Mes Triggers",
    "no-React": "Aucun Trigger à Afficher",
    "add-React": "Nouveau Trigger",
    "help": "Aide",
    "text": "Trigger fonctionne avec les applications ThingHTTP, ThingTweet et MATLAB Analysis pour effectuer des actions lorsque les données de canal remplissent certaines conditions. Par exemple, vous pouvez demander à une application mobile d'indiquer votre latitude et votre longitude à un canal ThingSpeak. Lorsque votre position est à une certaine distance de votre maison, demandez à ThingHTTP d’allumer les lumières de votre salon. <br>Pour créer une nouvelle réaction, cliquez sur <strong> Nouveau React </strong>.",
    "table": {
    "id": "#",
    "name": "Nom",
    "created": "Créé",
    "actions": "Actions"
    }
    }
    }
</i18n>
