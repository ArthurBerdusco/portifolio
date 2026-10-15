# Portfólio — Arthur Silva

Site pessoal em **Next.js 15 + Tailwind**, com um **backoffice em `/admin`** para editar todo o conteúdo sem mexer no código.

## Rodar localmente

```bash
npm install
cp .env.local.example .env.local   # defina ADMIN_PASSWORD
npm run dev
```

- Site: http://localhost:3000
- Backoffice: http://localhost:3000/admin

Em desenvolvimento, o conteúdo editado é salvo em `.data/content.json` e os uploads em `public/uploads/` (ambos ignorados pelo Git).

## Publicar na Vercel

1. Suba este projeto para o GitHub e importe na Vercel (ou substitua o conteúdo do repositório atual).
2. Em **Settings → Environment Variables**, crie:
   - `ADMIN_PASSWORD`: a senha do backoffice (use uma forte).
   - `ADMIN_SECRET`: texto longo e aleatório para assinar a sessão (opcional, recomendado).
   - `NEXT_PUBLIC_SITE_URL`: o endereço final do site (ex.: `https://arthurberdusco.vercel.app`).
3. **Salvar alterações em produção** precisa de um banco. Em **Storage / Marketplace**, adicione o **Upstash Redis** (plano gratuito) e conecte ao projeto. A Vercel cria `UPSTASH_REDIS_REST_URL` e `UPSTASH_REDIS_REST_TOKEN` (ou `KV_REST_API_URL` / `KV_REST_API_TOKEN`, que também funcionam).
4. *(Opcional)* Para **enviar imagens pelo painel**, adicione o **Vercel Blob** ao projeto (cria `BLOB_READ_WRITE_TOKEN`). Sem isso, cole a URL da imagem ou coloque o arquivo em `public/`.
5. Faça o redeploy. Acesse `/admin`, entre com a senha e edite.

Sem banco configurado, o site continua funcionando com o conteúdo padrão (`src/lib/default-content.ts`), mas o painel avisa que não consegue salvar.

## Como usar o backoffice

- **Perfil**: título, textos, foto, currículo em PDF, contato, redes e SEO.
- **Projetos**: adicionar, reordenar, remover; marcar até dois como *destaque*; capturas de tela com legenda; desafios e soluções.
- **Experiência, Formação, Habilidades, Certificações**: listas editáveis e reordenáveis.
- Clique em **Salvar alterações**. O site é atualizado na hora (o cache é invalidado automaticamente).
- *Restaurar conteúdo padrão* volta ao texto original que veio neste projeto.

## Estrutura

```
src/app/                 páginas (home, /projetos/[slug], /admin, API, sitemap, robots)
src/components/          seções do site e componentes do painel (admin/)
src/lib/default-content  conteúdo inicial, baseado no currículo
src/lib/store.ts         armazenamento (Upstash Redis / arquivo local)
src/lib/auth.ts          sessão assinada (HMAC) por cookie httpOnly
public/                  foto, currículo, logos e capturas de tela dos projetos (.webp)
```

## Segurança

- O backoffice só funciona com `ADMIN_PASSWORD` definida; a sessão dura 7 dias em cookie `httpOnly`.
- As rotas `/api/admin/*` validam a sessão em toda requisição; `/admin` e `/api` estão fora do Google (`robots` + `noindex`).
- Não versione `.env.local`.
