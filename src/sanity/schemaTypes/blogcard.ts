
import {  defineField, defineType } from "sanity";



export const Blogweb = defineType({
    title:"Blog-card",
    name:"Blog-card",
    type:"document",
    fields:[
        defineField({
            title:"heading of blog",
            type:"string",
            name:"heading",
           
        }),
    
         defineField({
            name:"image",
            type:"image",
            title:"Image of blogs",
         }),
         defineField({
            name:"description",
            type:"string",
            title:"blog of Description",
           
         }),
         
    ]

})