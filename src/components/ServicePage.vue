<template>
    <div class="services-section double-color-background">
        <h2>My Services</h2>
        <p class = "section-p">Discover a range of services tailored to elevate your business and personal presence online and on mobile devices, all created from scratch for the most versatility and personalization.</p>
    
        <div class="services-list">
            <div class="service-item" v-for="service in services" :key="service.id">
                <div class="service-icon">
                    <img :src="service.icon" :alt="service.title" />
                </div>
                <div class="service-content">
                    <h3>{{ service.title }}</h3>
                    <p>{{ service.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import webicon from '../assets/web-icon.png';
import applicationicon1 from '../assets/application-icon1.svg';
//   import applicationicon2 from '../assets/application-icon2.png'
import maintenanceicon from '../assets/maintenance-icon.png';

export default {
data() {
    return {
        services: [
            {
            id: 1,
            title: 'Web Development',
            description: 'Modern, responsive, and tailored websites to showcase your business or personal brand.',
            icon: webicon
            },
            {
            id: 2,
            title: 'Application Development',
            description: 'Custom applications built for both mobile and desktop to meet your specific needs.',
            icon: [applicationicon1]
            },
            {
            id: 3,
            title: 'Maintenance & Support',
            description: 'Ongoing support and updates for your web or application projects and general tech needs.',
            icon: maintenanceicon
            }
        ]
    };
}
};
</script>

<style scoped>
.services-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
    text-align: center;
    background-color: #53565a;
    color: #fff;
    min-height: 70vh;
}

.services-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.service-item {
    flex: 0 1 calc(33.3333% - 20px); 
    margin: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: left;
    background-color: #dddddd;
    color: #000;
}
.service-item h3 {
    margin-bottom: 15px;
}

.service-icon img {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
}

.double-color-background {
    background: linear-gradient(to bottom right, #4f8157 10%, #53565a 25%, #53565a 70%, #013c50 85%);
}

/* Mobile view */
@media only screen and (max-width: 767px) {
    h2 {
        margin-bottom: 30px;
    }
    .section-p {
        margin-bottom: 30px;
    }
    .double-color-background {
        background: linear-gradient(to bottom right, #013c50 10%, #53565a 25%, #53565a 70%, #53565a 85%);
    }

    .service-item {
        display: flex;
        flex-wrap: wrap;
    }
}

@media only screen and (min-width: 768px) {
    h2 {
        margin-bottom: 30px;
    }
    .section-p {
        margin-bottom: 30px;
        width: 50%;
    }
}
</style>
