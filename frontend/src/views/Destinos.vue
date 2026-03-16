<template>
  <section class="panel">
    <div class="hero">
      <h2 class="title">Destinos Culturais</h2>
      <p class="subtitle">Explore lugares incríveis e cheios de história</p>
    </div>

    <div class="search-wrapper">
      <SearchBar @search="filterDestinos" />
    </div>

    <div class="grid">
      <Card
        v-for="d in filteredDestinos"
        :key="d.id"
        :place="d"
        class="card"
      />
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import SearchBar from '@/views/SearchBar.vue'
import Card from '@/views/Card.vue'

// Lista de destinos
const destinos = ref([
  {
    id: 1,
    name: 'Ouro Preto, MG',
    desc: 'Cidade histórica com arquitetura colonial e igrejas barrocas.',
    image: 'https://imgs.search.brave.com/oJ1s4A0xvQGVE2NfxaFx4IzXhWBXZZ-ZFZXRYokqZ7A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTE0/MzY5Njc2L3Bob3Rv/L291cm8tcHJldG8t/aW4tbWluYXMtZ2Vy/YWlzLWJyYXppbC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/TUsyLS1iTHBDVjZD/ZE1HR0tiT2o3VFNj/T3JVc0pzNTI0NEdH/Wk5KX0poND0'
  },
  {
    id: 2,
    name: 'Rio de Janeiro, RJ',
    desc: 'Cidade-maravilhosa: praias, montanhas e o famoso Cristo Redentor.',
    image: 'https://imgs.search.brave.com/KKMFO5kETHLZA11dR9hrhO59IIfh7w40nAT3gz2MIC4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTE4/MjQwNDcyL3B0L3Yl/QzMlQURkZW8vYWVy/aWFsLXZpZXctb2Yt/Y29yY292YWRvLWFu/ZC1ndWFuYWJhcmEt/YmF5LWF0LXJpby1k/ZS1qYW5laXJvLWJy/YXppbC5qcGc_cz02/NDB4NjQwJms9MjAm/Yz1QZDIxTHpvT2VR/X21aa1dGaGJDcl92/UEdYZE9RbjBqZXFP/bjlkdFNLbW1vPQ'
  },
  {
    id: 3,
    name: 'São Paulo, SP',
    desc: 'Maior metrópole do Brasil, vibrante, multicultural e cheia de vida urbana.',
    image: 'https://imgs.search.brave.com/Ynaiywrf2gz2eFuB9vHVjq8rW8_BfKmfwUwinzW7oV4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM4/Njg2NDU2NS9waG90/by9zYW8tcGF1bG8t/c3RhdGUtZmxhZy1m/bHV0dGVyaW5nLWF0/LXRoZS10b3Atb2Yt/dGhlLXNhbnRhbmRl/ci1saWdodGhvdXNl/LWNpdHktaW4tdGhl/LWJhY2tncm91bmQu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PXpYc0ZfenpBbkJZ/UWpLZlRjV01IbjlC/TFBxRW5XbkFybzJf/MzI3cFhMNU09'
  },
  {
    id: 4,
    name: 'Foz do Iguaçu, PR',
    desc: 'Local das espetaculares Cataratas do Iguaçu, uma das maiores quedas d’água do mundo.',
    image: 'https://imgs.search.brave.com/JAC2ST6dklQgRy0NJ_bxYnMcjyRuSWogSCG5Y_5MLcw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2l2aXRhdGlzLmNv/bS9mL2JyYXNpbC9m/b3otZGUtaWd1YXp1/L2V4Y3Vyc2lvbi1j/YXRhcmF0YXMtaWd1/YXp1LWFyZ2VudGlu/YS1saXN0LmpwZw'
  },
  {
    id: 5,
    name: 'Porto de Galinhas, PE',
    desc: 'Praia paradisíaca com piscinas naturais e águas cristalinas.',
    image: 'https://imgs.search.brave.com/Xj6FPZLY3KgGsm8m5gTI_eLLHta4YFD3LMebKEx2EGE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTQ2/OTE5MDU0L3Bob3Rv/L2RvdXJvLXJpdmVy/LWFuZC1wb3J0by1v/bGQtdG93bi1hdC1z/dW5zZXQtcG9ydHVn/YWwuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPXZ6WS1ZRUgw/VFV1cHNhanhtbE9r/bVVaM3RWUkg5eFh5/ckM4ZDg4el9rMDg9'
  },
  {
    id: 6,
    name: 'Salvador, BA',
    desc: 'Capital da Bahia: axé, colonialismo, pelourinho e forte identidade cultural.',
    image: 'https://imgs.search.brave.com/avzsucAgs18TsIssLWnRQ-Xw6Zh_HSLWiN2N6fPxTek/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTQx/ODcwOTc2L3B0L2Zv/dG8vZHJvbmUtdmll/dy1vbi1jb2FzdGxp/bmUtb2Ytc2FsdmFk/b3ItZGEtYmFoaWEu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PThOVWMtLTVqUWVh/N25UNWJ4Y1cwTlV2/ajczRkg3N09ZT1J0/bkFuNnAtaHM9'
  },
  {
    id: 7,
    name: 'Florianópolis, SC',
    desc: 'Ilha com praias diversas, surfe, dunas e natureza exuberante.',
    image: 'https://imgs.search.brave.com/fnsgkzvt-ud9kvz8AShzpPgcqIdH8-EnZM1YoTUcdvw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTAy/NDMxMDcyNi9wdC9m/b3RvL2Zsb3JpYW4l/QzMlQjNwb2xpcy1i/cmF6aWwuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTg4ZUpE/bGRWbjVXTEVwTnlU/Q3NEX2NTS21TRW5T/Uk9TQlBCZ05zbm9t/dlk9'
  },
  {
    id: 8,
    name: 'Manaus, AM',
    desc: 'No coração da Amazônia: meio da floresta, rios e encontro de águas.',
    image: 'https://imgs.search.brave.com/haS1kvLCbTe6hBa2yr2Bgdy6gunyUbeBOG7O4x0xXGI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTEz/MDI2ODM0MC9waG90/by9tYW5hdXMtY2l0/eS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9YXl4QjROSmlU/YTRVRUlvN1RYakpK/Vmw5MnkxTGMxYXVR/VWdILUNWMDVhND0'
  },
  {
    id: 9,
    name: 'Gramado, RS',
    desc: 'Cidade serrana de estilo europeu, famosa no inverno e nos chocolates.',
    image: 'https://imgs.search.brave.com/PDD_9z7UkqCk_YjXYm4ZKQ9sxR4i-rl3j-nkZMD6DME/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTc1/ODA4NTQyNy9waG90/by9uYXRhbC1sdXot/Y2hyaXN0bWFzLWRl/Y29yYXRpb24tYXQt/Z3JhbWFkby1tYWlu/LXN0cmVldC1ncmFt/YWRvLXJpby1ncmFu/ZGUtZG8tc3VsLWJy/YXppbC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9bGtnT2dt/Nm96TWZRNTBxemZv/aktsNDlLQzdiZFdB/dGtLOU9ZVS1Tby0w/cz0'
  },
  {
    id: 10,
    name: 'Chapada Diamantina, BA',
    desc: 'Parque nacional com cachoeiras, trilhas e paisagens de tirar o fôlego.',
    image: 'https://imgs.search.brave.com/bNyO8J9aZ-OzTTzIfNxLph4nlGfEXLrK_JPGDV5u8i4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDg0/MzI5NzAxL3B0L2Zv/dG8vY2hhcGFkYS1k/aWFtYW50aW5hLWJh/aGlhLWJyYXppbC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/R3dqc3RXczVFOEFv/eWlCN0s2UGd6OTVX/MUN5YjJnY05wNVZy/UEdYaUotcz0'
  },
  {
    id: 11,
    name: 'Bonito, MS',
    desc: 'Destino de ecoturismo: águas límpidas, grutas e natureza preservada.',
    image: 'https://imgs.search.brave.com/VlPdzZanLdqC0Mh11gItGGSDe0SNEXgEqbSRoEvzlE4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ib25p/dG9lY290b3VyLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MC8xMC9ib25pdG8t/MTAuanBn'
  },
  {
    id: 12,
    name: 'Jericoacoara, CE',
    desc: 'Vila de praia no Ceará com dunas, kitesurf e pôr-do-sol magnífico.',
    image: 'https://imgs.search.brave.com/INK5LDy7UEqCsg4xO3u0r141g6aX8OCbOhCn5l9yExc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9qZXJp/Y29hY29hcmEtYmVh/Y2gtaG9sZWQtc3Rv/bmUtbmF0aW9uYWwt/cGFyay1zdGF0ZS1j/ZWFyYS1icmF6aWwt/d2luZHMtc3Ryb25n/LXVuaWRpcmVjdGlv/bmFsLWNvbnN0YW50/LWFyZWEtbXVjaC00/MzM2OTk0Ni5qcGc'
  },
  {
    id: 13,
    name: 'Pirenópolis, GO',
    desc: 'Cidade histórica com cachoeiras próximas e clima de interior conservado.',
    image: 'https://imgs.search.brave.com/pObMiPJDalwR9iZtFnC7qniEpbkgkhoZ8VcdyIQlAhE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdt/ZC5uZXQvaW1hZ2Vz/L3YxL2d1aWEvMTYx/NjI1MC9jZW50cm8t/aGlzdG9yaWNvLWRl/LXBpcmVub3BvbGlz/LmpwZw'
  },
  {
    id: 14,
    name: 'Lençóis Maranhenses, MA',
    desc: 'Parque dos lençóis: dunas brancas e lagoas de água doce formam cenário único.',
    image: 'https://imgs.search.brave.com/E75WvY5DVQ943lGziGs1GnkPvth1G-lBDpm7EkXd22o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90cmF2/YW5kZXIubmwvd3At/Y29udGVudC91cGxv/YWRzLzIwMjUvMDkv/d2F0LXRlLWRvZW4t/aW4tbGVuY29pcy1t/YXJhbmhlbnNlcy0x/MDI0eDU3Ni5qcGVn'
  },
  {
    id: 15,
    name: 'Recife, PE',
    desc: '“Veneza Brasileira”: pontes, rios, história e carnaval animado.',
    image: 'https://imgs.search.brave.com/OtiOHC21Xb1Jq_bm7atH4aX173aZC-hzm3Q19y1vWNk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTYy/MTc3MTY1L2VzL2Zv/dG8vcmVjaWZlLWRv/d250b3duLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1FV2p3/NnF0SkJOMG9mRmxZ/WE1XVkd3UFVQb1BS/WDVYMHZWSEsxaW1z/eTJBPQ'
  },
  {
    id: 16,
    name: 'Paraty, RJ',
    desc: 'Beleza natural e herança cultural no litoral fluminense.',
    image: 'https://imgs.search.brave.com/mHUEVSKnaZAyNvnKI94ip1YbYx0byPGy1vAGcLrn_5s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1Lzk1LzA2Lzc0/LzM2MF9GXzU5NTA2/NzQyN19lZHBScnBP/S1hZNzBGMk1Xc0VM/WGlNYWtWbDBGZWd4/Wi5qcGc'
  }
])

const query = ref('')

function filterDestinos(text) {
  query.value = text
}

const filteredDestinos = computed(() =>
  !query.value
    ? destinos.value
    : destinos.value.filter(d =>
        d.name.toLowerCase().includes(query.value.toLowerCase()) ||
        d.desc.toLowerCase().includes(query.value.toLowerCase())
      )
)
</script>

<style scoped>
.panel {
  background: var(--white);
  border-radius: 14px;
  padding: 24px;
  box-shadow: var(--shadow);
}

.hero {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 16px;
}

.title {
  color: var(--moss-600);
  font-weight: 700;
  font-size: 22px;
}

.subtitle {
  color: var(--muted);
  font-size: 15px;
}

.search-wrapper {
  margin: 16px 0;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
}

/* 🔹 Efeito de ampliação e sombra nos cards */
.card {
  transition: transform 0.35s ease, box-shadow 0.35s ease;
  border-radius: 12px;
  overflow: hidden;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 28px rgba(15, 23, 42, 0.2);
  z-index: 2;
}

/* Se quiser também ampliar a imagem dentro do card */
.card .image {
  transition: transform 0.5s ease;
}

.card:hover .image {
  transform: scale(1.1);
}
</style>
