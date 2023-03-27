<template>
    <div class="catalog">
        <div class="catalog__filter">
            <div class="search">
                <img src="@/assets/img/search.svg" alt=""/>
                <input type="text" placeholder="Поиск курса" v-model="search"/>
            </div>
            <div class="filter-type">
                <ButtonFilterType @click.native="addFilterType('type', 'mobile')"
                >Мобильная разработка
                </ButtonFilterType
                >
                <ButtonFilterType @click.native="addFilterType('type', 'backend')"
                >Бэкенд разработка
                </ButtonFilterType
                >
                <ButtonFilterType @click.native="addFilterType('type', 'it-inf')"
                >IT-инфраструктура
                </ButtonFilterType
                >
                <ButtonFilterType @click.native="addFilterType('type', 'frontend')"
                >Веб-разработка
                </ButtonFilterType
                >
                <ButtonFilterType @click.native="addFilterType('type', 'data')"
                >Анализ данных
                </ButtonFilterType
                >
            </div>
            <div class="filter-hard">
                <div class="filter-hard__title">
                    <img src="@/assets/img/filter-hard__title.svg" alt=""/>
                    <h3>Уровень сложности</h3>
                </div>
                <div class="filter-hard__buttons">
                    <ButtonFilterHard @click.native="addFilterType('level', 'all')"
                    >Любой
                    </ButtonFilterHard
                    >
                    <ButtonFilterHard @click.native="addFilterType('level', 'easy')"
                    >Для начинающих
                    </ButtonFilterHard
                    >
                    <ButtonFilterHard @click.native="addFilterType('level', 'medium')"
                    >Немного опыта
                    </ButtonFilterHard
                    >
                    <ButtonFilterHard @click.native="addFilterType('level', 'hard')"
                    >Для специалистов
                    </ButtonFilterHard
                    >
                </div>
            </div>
            <div class="filter-time">
                <div class="filter-time__title">
                    <img src="@/assets/img/filter-hard__title.svg" alt=""/>
                    <h3>Длительность курса</h3>
                </div>
                <div class="filter-time__content">
                    <input type="range" min="1" max="12" v-model="rangeDate"/>
                    <div class="content__text">
                        <p>1 месяц</p>
                        <p>12 месяцев</p>
                    </div>
                </div>
            </div>
            <div class="filter-subscribe">
                <div class="filter-subscribe__title">
                    <img src="@/assets/img/filter-hard__title.svg" alt=""/>
                    <h3>По подпискам</h3>
                </div>
                <div class="filter-subscribe__content">
                    <ButtonFilterHard @click.native="addFilterType('sub', 'all')">Любая</ButtonFilterHard>
                    <ButtonFilterHard @click.native="addFilterType('sub', 'dark')">Dark</ButtonFilterHard>
                    <ButtonFilterHard @click.native="addFilterType('sub', 'spot')">Spotlight</ButtonFilterHard>
                    <ButtonFilterHard @click.native="addFilterType('sub', 'sun')">Sunlight</ButtonFilterHard>
                </div>
            </div>
        </div>
        <div class="catalog__content">
            <TheCatalogCardList :curses="compCourses"/>
        </div>
    </div>
</template>
<script>
import ButtonFilterHard from "@/UI/ButtonFilterHard.vue";
import ButtonFilterType from "@/UI/ButtonFilterType.vue";
import TheCatalogCardList from "./TheCatalogCardList.vue";
export default {
    data() {
        return {
            typeFilters: [],
            levelFilters: [],
            subFilters: [],
            courses: [],
            search: '',
            rangeDate: 12,
        };
    },
    mounted() {
        this.courses = this.curses;
    },
    computed: {
        compCourses() {
            let result = [];
            let result2 = [];
            let result3 = [];
            if (this.typeFilters.length === 0) {
                result = this.courses;
            }
            for (let i = 0; i < this.courses.length; i++) {
                for (let j = 0; j < this.typeFilters.length; j++) {
                    if (this.courses[i].type === this.typeFilters[j]) {
                        result.push(this.courses[i]);
                    }
                }
            }
            if (this.levelFilters.length === 0) {
                result2 = result;
            }
            for (let i = 0; i < result.length; i++) {
                    for (let j = 0; j < this.levelFilters.length; j++) {
                        if (result[i].level === this.levelFilters[j]) {
                            result2.push(result[i]);
                        }
                    }
            }
            if(this.subFilters.length === 0) {
                result3 = result2;
                if (this.search) {
                    result3 = result3.filter((item) => {
                        return item.title.toUpperCase().includes(this.search.toUpperCase())
                    })
                }
                result3 = result3.filter((item) => {
                    return item.range <= this.rangeDate
                })
            } else{
                for(let i = 0; i < result2.length; i++)
                    for(let j = 0; j < this.subFilters.length; j++)
                    {
                        if (result2[i].subFilter === this.subFilters[j]) {
                            result3.push(result2[i]);
                        }  
                    }
                if (this.search) {
                    result3 = result3.filter((item) => {
                        return item.title.toUpperCase().includes(this.search.toUpperCase())
                    })
                }
                result3 = result3.filter((item) => {
                    return item.range <= this.rangeDate
                })
            }
            return result3;
            }
        },
    methods: {
        addFilterType(filterType, filter) {
            if (filterType === "type") {
                if (this.typeFilters.includes(filter)) {
                    this.typeFilters = this.typeFilters.filter((item) => item !== filter);
                } else {
                    this.typeFilters.push(filter);
                }
                return;
            }
            if (filterType === "level") {
                if (this.levelFilters.includes(filter)) {
                    this.levelFilters = this.levelFilters.filter((item) => item !== filter);
                } else {
                    this.levelFilters.push(filter);
                }
            }
            if (filterType === "sub") {
                if (this.subFilters.includes(filter)) {
                    this.subFilters = this.subFilters.filter((item) => item !== filter);
                } else {
                    this.subFilters.push(filter);
                }
            }
        },
    },
    props: {
        curses: {
            type: Array,
        },
    },
    components: {ButtonFilterType, ButtonFilterHard, TheCatalogCardList},
};
</script>

<style lang="scss" scoped>
.catalog {
  width: 100%;
  height: 1877px;
  display: flex;
  .catalog__filter {
    margin-right: 25px;
    width: 443px;
    height: 1204px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media(max-width: 1366px) {
        width: 220px;
    }
    .search {
      display: flex;
      align-items: center;
      padding-left: 20px;
      width: 443px;
      height: 60px;
      border: 1px solid rgba($color: #212121, $alpha: 0.15);
      border-radius: 24px;
      @media(max-width: 1366px) {
        width: 100%;
    }
      img {
        margin-right: 12px;
        width: 20px;
        height: 20px;
      }
      input {
        font-size: 18px;
        line-height: 120%;
        letter-spacing: -0.01em;
        border: none;
        outline: none;
        &::placeholder {
          color: #212121;
        }
      }
    }
    .filter-type {
      width: 245px;
      height: 318px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .filter-hard {
      border-top: 1px solid rgba(33, 33, 33, 0.1);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-top: 40px;
      width: 443px;
      height: 334px;
      .filter-hard__title {
        display: flex;
        height: 21px;
        align-items: center;
        font-weight: 450;
        font-size: 18px;
        line-height: 115%;
        img {
          margin-right: 12px;
        }
      }
      .filter-hard__buttons {
        width: 203px;
        height: 252px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }
    .filter-time {
      border-top: 1px solid rgba(33, 33, 33, 0.1);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-top: 40px;
      width: 443px;
      height: 89px;
      @media  (max-width: 1366px) {
        width: 100%;
    }
      .filter-time__title {
        display: flex;
        height: 21px;
        align-items: center;
        font-weight: 450;
        font-size: 18px;
        line-height: 115%;
        img {
          margin-right: 12px;
        }
      }
      .filter-time__content {
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: space-between;
        height: 46px;
        input {
          margin-top: 21px;
          width: 100%;
          height: 1px;
        }
        .content__text {
          width: 100%;
          height: fit-content;
          display: flex;
          justify-content: space-between;
          font-weight: 450;
          font-size: 14px;
          line-height: 115%;
          opacity: 0.3;
          margin-top: 6px;
      }
    }
    }
    .filter-subscribe {
      border-top: 1px solid rgba(33, 33, 33, 0.1);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-top: 40px;
      width: 443px;
      height: 203px;
      .filter-subscribe__title {
        display: flex;
        height: 21px;
        align-items: center;
        font-weight: 450;
        font-size: 18px;
        line-height: 115%;
        img {
          margin-right: 12px;
        }
      }
      .filter-subscribe__content {
        width: 241px;
        height: 120px;
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
      }
    }
  }
  .catalog__content {
    width: fit-content;
  }
}
</style>