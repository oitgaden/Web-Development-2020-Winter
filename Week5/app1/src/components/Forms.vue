<template>
    <div>
        <h1>Student Registration</h1>
        <form>

            <div class="form-entry">
                First Name: <input id='first-name' type="text" v-model="firstName"/>
                <span id='first-name-error' v-bind:style="{visibility: firstNameErrorVisibility}">Please enter first name.</span>
            </div>

            <div class="form-entry">
                Last Name: <input id='last-name' type="text" v-model="lastName"/>
                <span id='last-name-error' v-bind:style="{visibility: lastNameErrorVisibility}">Please enter last name.</span>
            </div>

            <div class="form-entry">
                <input type="button" value="Register" v-on:click="submitRegistration()"/>
            </div>

        </form>
    </div>
</template>

<script>
    export default {
        name: 'Registration',
        methods: {
            submitRegistration: function() {
                this.firstNameErrorVisibility = 'hidden';
                this.lastNameErrorVisibility = 'hidden';
                if (this.firstName.length == 0) {
                    this.firstNameErrorVisibility = 'visible';
                    return;
                }
                if (this.lastName.length == 0) {
                    this.lastNameErrorVisibility = 'visible';
                    return;
                }
                alert('Submitting Registration');
            }
        },
        data () {
            return {
                firstName: '',
                lastName: '',
                firstNameErrorVisibility: 'hidden',
                lastNameErrorVisibility: 'hidden'
            }
        }
    }
</script>

<style scoped>
    form {
        background-color: white;
        padding: 10px;
    }

    .form-entry {
        padding: 10px;
        background-color: lightgray;
    }

    .errorVisible {
        visibility: visible;
    }

    .errorNotVisible {
        visibility: hidden;
    }
</style>