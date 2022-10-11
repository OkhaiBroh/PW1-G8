<template>
    <div class="row">
        <div class="column center">
            <p class="title"> Open Events </p>
            <div class="bar-container">
                <div class="line-container">
                    <span class="circle-blue"></span>
                    <hr class="line">
                    <span class="circle-gray"></span>
                </div>
                <div class="text-container">
                    <p class="bar-text1"> Account </p>
                    <p class="bar-text2"> Security </p>
                </div>
            </div>
            <div class="panel">
                <div class="horizontal">
                    <img class="ico" src="../assets/icons/ico_pass.svg"/>
                    <div class="input-form">
                        <input class="text-input" name="password" placeholder="Password" type="password" required>
                        <label class="label-input" for="password"> Password* </label>
                    </div>
                </div>
                <div class="horizontal">
                    <img class="ico" src="../assets/icons/ico_pass.svg"/>
                    <div class="input-form">
                        <input class="text-input" name="confirm-password" placeholder="Confirm Password" type="password" required>
                        <label class="label-input" for="confirm-password"> Confirm Password* </label>
                    </div>
                </div>
                <button class="next"> Register </button>
                <p class="login-text"> Registered? Log in </p>
            </div>
        </div>
        <div class="column">
            <img class="image" src="https://grandluxorhotels.com/wp-content/uploads/2016/09/9323706488_7c288a9659_b.jpg">
        </div>
    </div> 
</template>

<style scoped>
    .line {
        border: 2px solid var(--bg_button);
        width: 100px;
    }
</style>