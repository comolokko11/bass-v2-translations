lang = {
    DEFAULT: (key) => `${key} nie zostało jeszcze przetłumaczone na polski.`,
    DEFAULT_LANGUAGE: 'Domyślny język',
    // PREFIX COMMAND
    PREFIX_REMINDER: (prefix = `@${this.client.user.tag}`) => `Obecny prefiks${Array.isArray(prefix) ?
        `y na tym serwerze to: ${prefix.map(pre => `\`${pre}\``).join(', ')}` :
        ` na tym serwerze to: \`${prefix}\``
    }`,
    PREFIX_SET: (prefix) => `Prefiks został zmieniony na \`${prefix}\``,
    CURRENT_PREFIX: (cprefix) => `Obecny prefiks to: \`${cprefix}\``,
    PREFIX_DESCRIPTION: 'Zmienia prefiks serwerowy/pokazuje obecny',
    PREFIX_LENGTH: '**Nie możesz ustawić prefiksu dłuższego niż 10 znaków!**',
    // SHIT
    COOLDOWN_TITLE: 'Cooldown',
    COOLDOWN: (remaining) => `Musisz poczekać jeszcze ${remaining} sekund.`,
    COMMAND_DISABLED_SERVER: 'Ta komenda jest wyłączona na tym serwerze.',
    COMMAND_DISABLED_GLOBAL: 'Ta komenda jest obecnie niedostępna.',
    MISSING_BOTPERMS: (missing) => `Nie mam wystaczających uprawnień aby wykonać tą komendę, brakuje: **${missing}**.`,
    NSFW: 'Ta komenda może zostać użyta tylko w kanałach NSFW!',
    NO_PERMISSIONS: 'Nie masz uprawnień aby użyć tej komendy!',
    MISSING_REQUIRED_SETTINGS: (settings) => `Na obecnym serwerze brakuje **${settings.join(', ')}** ustawień serwerowych przez co ta komenda nie może ukończyć pracy.`,
    RUNIN: (types) => `Ta komenda jest dostępna tylko na kanałach \`${types}\`!`,
    RUNIN_NONE: (name) => `Komenda \`${name}\` nie jest skonfigurowana na żaden typ kanału.`,
    // EVAL
    EVAL_DESCRIPTION: 'Ewaluuje dany kod',
    EVAL_ERROR: (time, output, type) => `**Błąd**:${output}\n**Typ**:${type}\n${time}`,
    EVAL_OUTPUT: (time, output, type) => `**Wyjście**:${output}\n**Typ**:${type}\n${time}`,
    EVAL_SENDFILE: (time, type) => `Wyjście było za długie... wysłano jako plik.\n**Typ**:${type}\n${time}`,
    EVAL_CONSOLE: (time, type) => `Wyjście było za długie... wysłano do konsoli.\n**Typ**:${type}\n${time}`,
    // PING
    PING: '**Pong!**\nPodróż w obie strony zajęła: \`Obliczanie...\`.\nHeartbeat websocketu: \`Obliczanie...\`.\nBaza danych: \`Obliczanie...\`.',
    PONG: (diff, ping, db) => `**Pong!**\nPodróż w obie strony zajęła: \`${diff}ms\`.\nHeartbeat websocketu: \`${ping}ms\`.\nBaza danych: \`${db}ms\`.`,
    PING_DESCRIPTION: 'Pong!',
    // INVITE
    INVITE_DESCRIPTION: 'Zaproś Bassa na swój serwer',
    BASS_INVITE: 'Zaproś bassa na swój serwer!',
    // INFO
    INFO_DESCRIPTION: 'Informacje na temat Bassa',
    // HELP
    HELP_DESCRIPTION: 'Ta wiadomość',
    HELP_NO_EXTENDED: 'Brak rozwiniętej pomocy.',
    HELP_USAGE: (usage) => `Użycie :: ${usage}`,
    HELP_EXTENDED: 'Rozwinięta pomoc ::',
    HELP_BOT_OWNER_ONLY: `Właściciel bota`,
    HELP_MANAGE_GUILD: `Zarządzanie serwerem`,
    HELP_SERVER_OWNER: `Właściciel serwera`,
    HELP_SYNTAX: (prefix) => `${prefix}komenda - Opis *(Wymanage permisje)*\nAby uzyskać informacje o użyciu danej komendy wpisz ${prefix}komenda a ona da właściwe użycie\nNa przykład: ${prefix}volume`,
    //HELP_SYNTAX: (prefix) => `${prefix}command - Description *(Required permissions)*\nTo get informations about command usage do ${prefix}help (commandname)\nUsing command that requires args, without giving them will also give command usage info`,
    HELP_COMMANDS_STRING: `Komendy`,
    HELP_COMMAND_NOT_FOUND: (command) => `Komenda \`${command}\` nie została znaleziona.`,
    HELP_TITLE: 'Pomoc Bassa',
    HELP_LINKS: 'Linki',
    HELP_SUPPORT_SERVER: 'Serwer pomocy',
    HELP_INVITE: 'Zaproszenie',
    // STATS
    STATS_DESCRIPTION: 'Pokazuje statystyki Bassa',
    CLUSTER: 'Klaster',
    ERROR: 'Błąd',
    SHARDS: 'Shardy',
    SERVERS: 'Serwery',
    USERS: 'Użytkownicy',
    CONNECTIONS: 'Połączenia',
    PLAYERS: 'Odtwarzacze',
    TOTAL: 'W sumie',
    CLUSTERS: 'Klastry',
    TOOK: (time) => `Zajęło ${time}`,
    STATS: 'Statystyki Bassa',
    // LANG
    LANG_NOT_FOUND: (lang, langsavailable) => `Język \`${lang}\` nie został znaleziony.\nDostępne języki: \`${langsavailable}\``,
    LANG_LANGUAGE_SET: (lang) => `Język został zmieniony na \`${lang}\`!`,
    CURRENT_LANGUAGE: (clang, langsavailable) => `**Obecny język to:** \`${clang}\`\n\nDostępne języki: \`${langsavailable}\``,
    LANG_DESCRIPTION: 'Zmienia język na serwerze/pokazuje obecny',
    // TRANSLATORS
    TRANSLATORS_DESCRIPTION: 'Pokazuje każdego tłumacza który pomógł tłumaczyć bassa na inne języki',
    // SAY
    SAY_DESCRIPTION: 'Bass powtarza daną wiadomość',
    // SHARD
    SHARD_DESCRIPTION: 'Pokazuje informacje na temat shardów/klastrów',
    EMBED_SHARD_DESCRIPTION: (shard, shards, cluster, clusters) => `Ten serwer jest na shardzie \`${shard}/${shards}\` oraz klastrze \`${cluster}/${clusters}\``,
    // SUPPORT
    BASS_SUPPORT_SERVER: 'Serwer pomocy z Bassem',
    // MUSIC
    NODE_BUSY: 'Ups, silnik audio na tym serwerze **jest obecnie zajęty**, poczekaj kilka sekund i spróbuj ponownie.',
    NODE_NOTHING_PLAYING: '**Nic nie gra na tym serwerze.**\nMoże coś puść?',
    NODE_NOTHING_PLAYED: '**Nic wcześniej nie grało.**',
    NODE_PROCESSING: 'Silnik audio przetwarza twoje zapytanie...',
    H4DEEP_DESCRIPTION: 'Przełącza filtr audio 4 gęstości',
    NODE_4DEEP_ENABLED: '**Włączono filtr** `4 gęstość`.',
    NODE_4DEEP_DISABLED: '**Wyłączono filtr** `4 gęstość`.',
    H8D_DESCRIPTION: 'Przełącza filtr audio 8D',
    NODE_8D_ENABLED: '**Włączono filtr** `8D`.',
    NODE_8D_DISABLED: '**Wyłączono filtr** `8D`.',
    ECHO_DESCRIPTION: 'Przełącza filtr audio echo',
    NODE_ECHO_ENABLED: '**Włączono filtr** `Echo`.',
    NODE_ECHO_DISABLED: '**Wyłączono filtr** `Echo`.',
    NIGHTCORE_DESCRIPTION: 'Przełącza filtr audio nightcore',
    NODE_NIGHTCORE_ENABLED: '**Włączono filtr** `Nightcore`.',
    NODE_NIGHTCORE_DISABLED: '**Wyłączono filtr** `Nightcore`.',
    VAPORWAVE_DESCRIPTION: 'Przełącza filtr audio vaporwave',
    NODE_VAPORWAVE_ENABLED: '**Włączono filtr** `Vaporwave`.',
    NODE_VAPORWAVE_DISABLED: '**Wyłączono filtr** `Vaporwave`.',
    BITRATE_DESCRIPTION: 'Zmienia bitrate/jakość muzyki',
    NODE_CHANGED_BITRATE: (amount) => `Bitrate został zmieniony na \`${amount}kbps\``,
    NODE_INVALID_BITRATE: 'Podaj poprawną wartość bitrate od \`8\` do \`512\` (kbps)',
    CLEAR_DESCRIPTION: 'Czyści kolejkę',
    CLEARED_QUEUE: 'Kolejka została wyczyszczona.',
    LOOP_DESCRIPTION: 'Zapętla obecną piosenkę/kolejkę',
    LOOP_SONG: '**Włączono pętlę piosenki.**',
    LOOP_QUEUE: '**Włączono pętlę kolejki.**',
    LOOP_ALREADY_SONG: 'Piosenka jest już zapętlona!',
    LOOP_ALREADY_QUEUE: 'Kolejka jest już zapętlona!',
    LOOP_DISABLED: '**Wyłączono pętlę.**',
    LOOP_INVALID: (prefix) => `**Podaj poprawny typ pętli** \`(0 - wyłącz, 1 - piosenka, 2 - kolejka)\`\nNa przykład: \`${prefix}loop 2\``,
    NOWPLAYING_DESCRIPTION: 'Pokazuje obecnie graną piosenkę',
    NOWPLAYING: 'Teraz Gra',
    PAUSE_DESCRIPTION: 'Pauzuje piosenkę',
    PAUSED: '**Zapauzowano.**',
    RESUME_DESCRIPTION: 'Wznawia song',
    RESUMED: '**Wznowiono.**',
    SHUFFLE_DESCRIPTION: 'Miesza kolejkę',
    SHUFFLE_SHUFFLING: '**Mieszanie kolejki...**',
    SHUFFLE_SHUFFLED: '**Wymieszano kolejkę.**',
    QUEUE_DESCRIPTION: 'Pokazuje obecną kolejkę',
    QUEUE_FETCHING: '**Pobieranie kolejki...**',
    QUEUE_MORE: (length) => `*.. I ${length} więcej*`,
    QUEUE_NOWPLAYING: 'Teraz gra',
    QUEUE_UPNEXT: 'Następnie',
    QUEUE_NOTHING: '**Nic**',
    QUEUE_LENGTH: 'Długość kolejki:',
    QUEUE_FILTERS: 'Filtry:',
    QUEUE_BASS_STRENGTH: 'Siła Bassu:',
    QUEUE_LOOP: '**Pętla:**',
    QUEUE_SONG: 'Piosenka:',
    QUEUE_YES: 'tak',
    QUEUE_NO: 'nie',
    QUEUE: 'Kolejka:',
    SKIP_DESCRIPTION: 'Pomija obecnie graną piosenkę',
    SKIPPED: 'Pominięto',
    STOP_DESCRIPTION: 'Zatrzymuje muzykę, czyści kolejkę i wychodzi z kanału głosowego',
    STOPPED: 'Zatrzymano.',
    PREV_DESCRIPTION: 'Pokazuje obecnie graną piosenkę',
    RECENTLY_PLAYED: 'Poprzednio grane:',
    VOLUME_DESCRIPTION: 'Zmienia głośność',
    VOLUME_CHANGED: (prev, amount) => `**Głośność została zmieniona z \`${prev}%\` do \`${amount}%\`.**`,
    VOLUME_SAME: (amount) => `**Głośność wynosi już \`${amount}%\`!**`,
    GIVE_PROPER_VOLUME: (current) => `Podaj poprawną wartość głośności od 0 do 200 (%)\nObecna głośność: \`${current}%\``,
    BASS_DESCRIPTION: 'Zmienia siłę wzmocnienia bassu',
    GIVE_PROPER_BASS: (current) => `Podaj poprawną wartość wzmocnienia bassu od 0 do 60 (dB)\nObecne wzmocnienie bassu: \`+${current}dB\``,
    NODE_BASS_CHANGED_DONATOR: (amount) => `**Zmienionio siłę wzmocnienia bassu na** \`+${amount}dB\`\nDziękuję ci za wspieranie Bassa!`,
    PLAY_DESCRIPTION: 'Puszcza muzykę',
    JOINING_VC_ERROR: 'Podczas próby dołączania do twojego kanału głosowego wystąpił nieznany błąd\nSpróbuj ponownie.',
    QUEUED: (url, title) => `Dodano [${title}](${url}) do kolejki.`,
    QUEUED_NOW: (url, title) => `[${title}](${url}) będzie teraz grane.`,
    QUEUE_ENDED: 'Kolejka się skończyła, opuściłem kanał głosowy.',
    PLAYING_ERROR: (error) => `Podczas próby zaczęcia grania piosenki wystąpił błąd.\nWiadomość błędu: \`${error}\``,
    PLAYING_EVENT_WITH: (bass, volume, bitrate, filters) => `Bitrate: \`${bitrate}kbps\`, Głośność: \`${volume}%\`\nFiltry: *${filters.join(', ') || '*-*'}*\nSiła wzmocnienia bassu: \`+${bass}dB\``,
    PLAY_NO_SONG: 'Podaj nazwę lub link do piosenki którą chcesz dodać.',
    PLAY_NO_VC: 'Nie jesteś na kanale głosowym.',
    PLAY_OTHER_VC: 'Nie jesteś na tym samym kanale głosowym co ja. Dołącz do mojego kanału i spróbuj ponownie.',
    PLAY_NO_PERMS_SPEAK: 'Nie mam permisji do mówienia na twoim kanale głosowym.',
    PLAY_NO_PERMS_CONNECT: 'Nie mam permisji aby dołączyć do twojego kanału głosowego.',
    SEARCHING_ERROR: (error) => `Podczas wyszukiwania wystąpił błąd.\nWiadomość błędu: ${error}`,
    SEARCHING_NOT_FOUND: 'Nie znaleziono wyników na twoje zapytanie wyszukiwania.',
    PLAY_WRONGURL: 'Link który podałeś wygląda na błędny.',
    PLAY_PROCESSING: 'Przetwarzanie...',
    PLAY_BACKEND_ERROR: 'Serwer przetwarzający wyniki wyszukiwania/playlisty jest offline albo wypluł błąd.\nWyślij tą informację na serwer pomocy **https://discord.gg/By3bvFc**!',
    PLAY_QUEUED_PLAYLIST: (size) => `Załadowano ${size} piosenek.`,
    LEAVING_VC: 'Zatrzymywanie grania i wychodzenie z kanału głosowego za 15 sekund jeżeli nikt do niego nie dołączy.',
    LEFT_VC: 'Zatrzymałem granie i wyszedłem z kanału głosowego z powodu nieaktywności.',
    // SUPPORT
    SUPPORT_DESCRIPTION: 'Serwer pomocy do pomocy z Bassem',
    // TTS
    TTS_DESCRIPTION: 'Zamienia tekst na mowę i wysyła go w pliku',
    TTS_WRONG_LANG: (langs, prefix) => `**Proszę użyj wspieranego języka!**\nWspierane języki: \`${langs.join(', ')}\`\nPrzykładowe użycie: \`${prefix}tts Cześć | pl\``,
    TTS_ERROR: 'Wystąpił błąd podczas pobierania pliku.',
    TTS_WRONG_TXT_LENGTH: 'Długość tekstu musi być większa niż 0 znaków i musi być mniejsza niż 200 znaków.',
    TTS_NO_ARGS: (prefix, langs) => `**Podaj tekst i język który chcesz przekonwertować na plik z wiadomością tts.**\nPrzykład użycia: \`${prefix}tts Cześć | pl\`\nDostępne języki: \`${langs.join(', ')}\``,
    // IDK
    NONE_VC: 'Musisz być na moim kanale głosowym aby użyć tej komendy.',
    NONE_NVC: 'Nie mogę dołączyć do twojego kanału głosowego!',
    NONE_NOVC: 'Nie jesteś na kanale głosowym!',
    NONE_VCFULL: 'Twój kanał głosowy jest pełny!',


    // OTHER
    REQUESTED_BY: 'Wywołano przez',
    OK: 'OK',
    ERROR: 'BŁĄD'
};
// Roki_100#0230