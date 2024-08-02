import { defineStore } from 'pinia'
import gridData from '@/components/grid/config/index'
export const kanban = defineStore("kanban", {
    state: () => {
        return {
            gridList: gridData,
        };
    },
    getters: {
    },
    actions: {
    }
});