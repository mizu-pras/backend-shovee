'use strict'

const mongoose = require('mongoose')

const UserDetailModel = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    name: {
        type: 'String',
        trim: true,
    },
    gender: {
        type: 'String',
        enum : ['L', 'P']
    },
    tanggal_lahir: {
        type: 'String'
    },
    image_profil: {
        type: 'String'
    },
    address: {
        province: {
            type: 'String'
        },
        city: {
            type: 'String'
        },
        district: {
            type: 'String'
        },
        full_addrees: {
            type: 'String'
        },
        zip_code: {
            type: 'String'
        }
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('UserDetails', UserDetailModel)