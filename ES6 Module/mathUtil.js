export const PI=3.14159;

export function getCircumfrence(radius){

    return 2 * PI * radius;
}

export function getArea(radius){

    return PI * Math.pow(radius, 2);
}