const MoviesList = [
    {
        image: "https://images.unsplash.com/photo-1567589443762-44e6c1008639?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80",
        nameRu: "длинное название фильма, которое не помещается в одну строку и заходит на вторую",
        duration: 123,
        _id: 1234
    },
    {
        image: "https://images.unsplash.com/photo-1567589443762-44e6c1008639?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80",
        nameRu: "film 1",
        duration: 123,
        _id: 1254
    },
    {
        image: "https://images.unsplash.com/photo-1567589443762-44e6c1008639?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80",
        nameRu: "film 1",
        duration: 123,
        _id: 1235
    },
    {
        image: "https://images.unsplash.com/photo-1567589443762-44e6c1008639?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80",
        nameRu: "film 1",
        duration: 123,
        _id: 4321
    },
    {
        image: "https://images.unsplash.com/photo-1567589443762-44e6c1008639?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80",
        nameRu: "film 1",
        duration: 123,
        _id: 1000
    },
    // {
    //     image: "https://images.unsplash.com/photo-1567589443762-44e6c1008639?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80",
    //     nameRu: "film 1",
    //     duration: 123
    // },
    // {
    //     image: "https://images.unsplash.com/photo-1567589443762-44e6c1008639?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80",
    //     nameRu: "film 1",
    //     duration: 123,
    //     _id: 1001
    // },
    // {
    //     image: "https://images.unsplash.com/photo-1567589443762-44e6c1008639?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80",
    //     nameRu: "film 1",
    //     duration: 123,
    //     _id: 1002
    // },
    // {
    //     image: "https://images.unsplash.com/photo-1567589443762-44e6c1008639?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80",
    //     nameRu: "film 1",
    //     duration: 123,
    //     _id: 1003
    // },
    // {
    //     image: "https://images.unsplash.com/photo-1567589443762-44e6c1008639?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80",
    //     nameRu: "film 1",
    //     duration: 123,
    //     _id: 1004
    // },
    // {
    //     image: "https://images.unsplash.com/photo-1567589443762-44e6c1008639?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80",
    //     nameRu: "film 1",
    //     duration: 123,
    //     _id: 1005
    // },
    // {
    //     image: "https://images.unsplash.com/photo-1567589443762-44e6c1008639?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80",
    //     nameRu: "film 1 ieuowuo woe owuo woi uwo owo wor w owro wo owu owo wor owr owow or wor ower owuro wuoru woru",
    //     duration: 123,
    //     _id: 1006
    // },
    // {
    //     image: "https://images.unsplash.com/photo-1567589443762-44e6c1008639?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80",
    //     nameRu: "film 1",
    //     duration: 123,
    //     _id: 1007
    // },
    // {
    //     image: "https://images.unsplash.com/photo-1567589443762-44e6c1008639?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80",
    //     nameRu: "film 1",
    //     duration: 123,
    //     id: 1008
    // },
    // {
    //     image: "https://images.unsplash.com/photo-1567589443762-44e6c1008639?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80",
    //     nameRu: "film 1",
    //     duration: 123,
    //     _id: 1009
    // },
    // {
    //     image: "https://images.unsplash.com/photo-1567589443762-44e6c1008639?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80",
    //     nameRu: "film 1",
    //     duration: 123,
    //     _id: 1010
    // },
    // {
    //     image: "https://images.unsplash.com/photo-1567589443762-44e6c1008639?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80",
    //     nameRu: "film 1",
    //     duration: 123,
    //     _id: 1011
    // },
    // {
    //     image: "https://images.unsplash.com/photo-1567589443762-44e6c1008639?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80",
    //     nameRu: "film 1",
    //     duration: 123,
    //     _id: 1012
    // },
    // {
    //     image: "https://images.unsplash.com/photo-1567589443762-44e6c1008639?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80",
    //     nameRu: "film 1",
    //     duration: 123,
    //     _id: 1013
    // },
    // {
    //     image: "https://images.unsplash.com/photo-1567589443762-44e6c1008639?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80",
    //     nameRu: "film 1",
    //     duration: 123,
    //     _id: 1014
    // },
    // {
    //     image: "https://images.unsplash.com/photo-1567589443762-44e6c1008639?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80",
    //     nameRu: "film 1",
    //     duration: 123,
    //     _id: 1015
    // },
    // {
    //     image: "https://images.unsplash.com/photo-1567589443762-44e6c1008639?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80",
    //     nameRu: "film 1",
    //     duration: 123,
    //     _id: 1016
    // },
    // {
    //     image: "https://images.unsplash.com/photo-1567589443762-44e6c1008639?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80",
    //     nameRu: "film 1",
    //     duration: 123,
    //     _id: 1017
    // },
    // {
    //     image: "https://images.unsplash.com/photo-1567589443762-44e6c1008639?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80",
    //     nameRu: "film 1",
    //     duration: 123,
    //     _id: 1018
    // },
]

export default MoviesList;