<template>
    <section class="login">
        <h1>Login</h1>
        <form>
            <label for="email">Email</label>
            <input type="text" name="email" id="email" />
            <label for="senha">Senha</label>
            <input type="password" name="password" id="password"  />
            <button class="btn" @click.prevent="logar">Logar</button>
        </form>
        <p class="perdeu">
            <a href="/" target="_blank">Perdeu a senha? Clique aqui.</a>
        </p>
        <LoginCriar />
    </section>
</template>

<script>
import LoginCriar from "@/components/LoginCriar.vue";
export default {
    name: "Login",
    components: {
        LoginCriar
    }
};
</script>

<style lang="scss" scoped>
.login {
    max-width: 500px;
    margin: 0 auto;
    padding: 0 20px;
}

form {
    display: grid;
}

.btn {
    width: 100%;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
}
</style>