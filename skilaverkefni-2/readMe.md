# Team Task Hub – Testing Assignment  
### *Skilaverkefni 2* 
## 🔗 [Opna skilaverkefni 2 á Github](https://github.com/Kristin111222/NTV_2026/tree/main/skilaverkefni-2)

---

##  Yfirlit

Þetta verkefni inniheldur:

-  **Vitest** unit tests  
-  **Storybook** component stories  
-  **Cypress** E2E tests  
-  **CI Pipeline** með GitHub Actions  
-  Lagfæringar og endurskipulagningu frá *skilaverkefni 1*

---

#  Keyra verkefnið

```bash
npm test
```

```bash
npm run storybook
```

```bash
npm run cypress
```

---

# Lagfæringar frá skilaverkefni 1

Verkefnið var endurskipulagt með því að færa hluta yfir í reusable components.

### Components sem voru aðskilin:
- `ProjectCard`
- `Tasks`
- `Dashboard`

---

#  1. Vitest

### 4 test skrár

| Test | Path |
|---|---|
| ProjectCard | `src/components/_tests_/ProjectCard.test.tsx` |
| useTaskFilters | `src/hooks/_tests_/useTaskFilters.test.tsx` |
| useTaskStats | `src/hooks/_tests_/useTaskStats.test.tsx` |
| TaskRow | `src/components/_tests_/TaskRow.test.tsx` |

---

#  2. Storybook

### 3 stories

| Story | Path |
|---|---|
| ProjectCard | `src/components/ProjectCard/ProjectCard.stories.tsx` |
| Stats | `src/components/dashboard/stats.stories.tsx` |
| TaskRow | `src/components/tasks/TaskRow/TaskRow.stories.tsx` |

---

#  3. Cypress (E2E)

### E2E test

| Test | Path |
|---|---|
| Project → Task flow | `cypress/e2e/task.flow.cy.ts` |

---

#  4. CI Pipeline

## Gott ráð
Hafa **2 terminals** opin:

```powershell
PS C:\NTV_2026\ntv-forritun-fk3-vor-2026>
```

```powershell
PS C:\NTV_2026\ntv-forritun-fk3-vor-2026\skilaverkefni-2\team-task-hub>
```

---

##  Pipeline staðsetning

```bash
NTV_2026/ntv-forritun-fk3-vor-2026/.github/workflows/main.yml
```

---

## ▶ Keyra pipeline

Fara inn í:

```bash
NTV_2026/ntv-forritun-fk3-vor-2026
```

Síðan keyra:

```bash
git push origin main
```

---

## Endurtaka pipeline

Til að triggera pipeline aftur þarf að gera litla breytingu:

```bash
git add .
git commit -m "breyting"
git push origin main
```

---

##  Athuga pipeline status

GitHub Actions:

https://github.com/Kristin111222/NTV_2026/actions

---

#  5. Bugs & Lagfæringar

## 1. Bug í Vitest setup

### Nýtt file:

- Það vantaði file sem heitir setup.ts

```bash
src/test/setup.ts
```

### Lagfæring í `vite.config.ts`

Undir `test`:

```ts
setupFiles: "./src/test/setup.ts"
```

---

## 2. Annar bug fundinn og lagaður

### Vandamál
Tómt test file:

```bash
src/hooks/_tests_/useTaskFilters.test.tsx
```

### Lausn
- File var lagað
- Test kóði settur inn
- Vitest keyrði rétt eftir lagfæringu

-----------------------------------------------------------------------------------
