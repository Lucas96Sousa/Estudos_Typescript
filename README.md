# Estudos_Typescript

<p> Repositório para projetos envolvendo typescript, com foco no backend e mobie </p>





# Tsconfig padrão

```
{
    "compilerOptions": {
        "target": "es2019",
        "moduleResolution": "node",
        "module": "commonjs",
        "lib": ["es2019"],
        "sourceMap": true,
        "outDir": "dist",
        "strict": true,
        "noImplicitAny": true,
        "strictNullChecks": true,
        "strictFunctionTypes": true,
        "noImplicitThis": true,
        "resolveJsonModule": true,
        "alwaysStrict": true,
        "removeComments": true,
        "noImplicitReturns": true,
        "esModuleInterop": true,
        "allowSyntheticDefaultImports": true,
        "baseUrl": ".",
        "paths": {
            "@src/*": ["./src/*"],
            "@test/*": ["./test/*"],
        },
        "rootDirs": [
            "./src",
            "./test"
        ],
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true,
   },
   "include": [
       "./src/**/*.ts",
       "./test/**/*.ts"
   ],
   "exclude": [
      "./node_modules/*",
      "dist"       
   ]
}

```