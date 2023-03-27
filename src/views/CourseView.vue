<template>
    <div class="cours__container">
        <TheHeader />
        <TheCourseTitle />
        <TheCourseBenefits />
        <TheCourseStructure />
        <TheCoursePartners />
        <TheCourseMentors />
    </div>
</template>

<script>
import TheCourseBenefits from '@/components/CoursPage/TheCourseBenefits.vue';
import TheCourseStructure from '@/components/CoursPage/TheCourseStructure.vue';
import TheCourseTitle from '@/components/CoursPage/TheCourseTitle.vue';
import TheHeader from '@/components/HomePage/TheHeader.vue';
import TheCoursePartners from '@/components/CoursPage/TheCoursePartners.vue'
import TheCourseMentors from '@/components/CoursPage/TheCourseMentor.vue'
    export default {
        components :{ TheHeader, TheCourseTitle, TheCourseBenefits, TheCourseStructure, TheCoursePartners, TheCourseMentors }
    }
</script>

<style lang="scss" scoped>
.cours__container{
    
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>