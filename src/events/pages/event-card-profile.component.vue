<script>
export default {
    data() {
        return {
            user: {
                name: 'John Doe',
                email: 'johndoe@example.com',
                avatar: 'https://us.123rf.com/450wm/fizkes/fizkes2104/fizkes210400405/167446118-cierra-el-retrato-de-la-pantalla-de-la-cabeza-de-un-joven-cauc%C3%A1sico-sonriente-que-mira-la.jpg?ver=6',
                bio: 'I am a event manager.'
            }
        };
    }
};
</script>

<template>
    <div class="profile">
        <div class="profile-header">
            <img class="profile-avatar" :src="user.avatar" :alt="user.name" />
            <h1 class="profile-name">{{ user.name }}</h1>
        </div>
        <div class="profile-details">
            <p class="profile-email">{{ user.email }}</p>
            <p class="profile-bio">{{ user.bio }}</p>
        </div>
    </div>
</template>

<style scoped>
.profile {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 3px solid #ccc;
    border-radius: 4px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.profile-header {
    margin-bottom: 20px;
}

.profile-avatar {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
}

.profile-name {
    margin-top: 10px;
    font-size: 24px;
    font-weight: bold;
}

.profile-email {
    margin-bottom: 10px;
}

.profile-bio {
    font-style: italic;
}
</style>