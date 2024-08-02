import { baseRequest } from '@/utils/request.js'


export const eqptOee = (data) => {
    return baseRequest('biz/kanban/projectmanage', data, 'get')
}


export const depSelector = (data) => {
    return baseRequest('biz/kanban/depSelector', data, 'get')
}

export const getTask = (data) => {
    return baseRequest('biz/kanban/getTask', data, 'get')
}

export const getTaskByStaff = (data) => {
    return baseRequest('biz/kanban/getTaskByStaff', data, 'get')
}

export const getLateByWork = (data) => {
    return baseRequest('biz/kanban/getLateByWork', data, 'get')
}

export const getLateByStaff = (data) => {
    return baseRequest('biz/kanban/getLateByStaff', data, 'get')
}

export const syncTita = (data) => {
    return baseRequest('biz/kanban/syncTita', data, 'get')
}


//品质追踪
export const kanbanTracking = (data) => {
    return baseRequest('biz/kanban/tracking', data, 'get')
}

//未结案不合格单
export const unqualifiedPassrate = (data) => {
    return baseRequest('biz/kanban/unqualified/passrate', data, 'get')
}

//售后退料分析
export const aftersalesAnalyse = (data) => {
    return baseRequest('biz/kanban/aftersales/analyse', data, 'get')
}


//售后退料分析-保内产品
export const aftersalesByproduct = (data) => {
    return baseRequest('biz/kanban/aftersales/byproduct', data, 'get')
}

//售后退料分析-保内机型
export const aftersalesBymodel = (data) => {
    return baseRequest('biz/kanban/aftersales/bymodel', data, 'get')
}

//本年客诉问题类型统计
export const complaintsStatistics = (data) => {
    return baseRequest('biz/kanban/complaints/statistics', data, 'get')
}

//本年客诉问题类型统计
export const complaintsTypecount = (data) => {
    return baseRequest('biz/kanban/complaints/typecount', data, 'get')
}

//365天内客诉总量
export const complaintsCount = (data) => {
    return baseRequest('biz/kanban/complaints/count', data, 'get')
}

//任务状态（未结案不合格单）
export const unqualifiedForms = (data) => {
    return baseRequest('biz/kanban/unqualified/forms', data, 'get')
}

// 获取项目列表
export const projectManage = (data) => {
    return baseRequest('biz/kanban/projectmanage', data, 'get')
}

// 获取项目列表
export const projectManagePost = (data) => {
    return baseRequest('biz/kanban/projectmanage', data, 'post')
}


// 供应商排名
export const supplierRank = (data) => {
    return baseRequest('biz/kanban/supplier/rank', data, 'get')
}

// 成员
export const staffList = (data) => {
    return baseRequest('biz/kanban/staff/list', data)
}

// 成员
export const staffSeatlist = (data) => {
    return baseRequest('biz/kanban/staff/seatlist', data)
}

// 已签未出机类型统计-金额-
export const outmachineAmount = (data) => {
    return baseRequest('/biz/kanban/technology/outmachine/amount', data, 'get')
}

// 已签未出机类型统计-数量-
export const outmachineQuantity = (data) => {
    return baseRequest('/biz/kanban/technology/outmachine/quantity', data, 'get')
}

//
export const outmachineMonthly = (data) => {
    return baseRequest('/biz/kanban/technology/outmachine/monthly', data, 'get')
}

// 
export const notoutmachine = (data) => {
    return baseRequest('/biz/kanban/technology/notoutmachine', data, 'get')
}

// 出机 订单
export const outmachineOrders = (data) => {
    return baseRequest('/biz/kanban/technology/outmachine/orders', data, 'get')
}

// 金额点击 显示订单 根据名称
export const amountOrders = (data) => {
    return baseRequest('/biz/kanban/technology/outmachine/amount/orders', data, 'get')
}

// 数量点击 显示订单 根据名称
export const quantityOrders = (data) => {
    return baseRequest('/biz/kanban/technology/outmachine/quantity/orders', data, 'get')
}

// 待审核任务
export const technologyTask = (data) => {
    return baseRequest('/biz/kanban/technology/oa/task', data, 'get')
}

// 待审核任务列表
export const technologyTaskList = (data) => {
    return baseRequest('/biz/kanban/technology/oa/task/list', data, 'get')
}

// 设备动态
export const technologyDispatchTrack = (data) => {
    return baseRequest('/biz/kanban/technology/dispatchTrack', data, 'get')
}

// 设备动态列表
export const technologyDispatchTrackList = (data) => {
    return baseRequest('/biz/kanban/technology/dispatchTrack/list', data, 'get')
}
