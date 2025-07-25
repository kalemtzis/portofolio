import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route('*', 'routes/notFound.tsx'),
    route('/hire', 'routes/hire.tsx'),
] satisfies RouteConfig;
