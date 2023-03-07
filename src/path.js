const sTok = {
    Source: [
        "/assets/g4 s2/ref/G4_18_ref.wav",
        "/assets/g4 s2/ref/G4_19_ref.wav",
        "/assets/g4 s2/ref/G4_26_ref.wav",
        "/assets/g4 s2/ref/G4_27_ref.wav",
    ],
    Target: [
        "/assets/g4 s2/gen/G4_18_gen.wav",
        "/assets/g4 s2/gen/G4_19_gen.wav",
        "/assets/g4 s2/gen/G4_26_gen.wav",
        "/assets/g4 s2/gen/G4_27_gen.wav",
    ]
}

const kTok = {
    Source: [
        "/assets/kanada_multiple_2_99_G4_S1/ref/G4_1_ref.wav",
        "/assets/kanada_multiple_2_99_G4_S1/ref/G4_2_ref.wav",
        "/assets/kanada_multiple_2_99_G4_S1/ref/G4_3_ref.wav",
        "/assets/kanada_multiple_2_99_G4_S1/ref/G4_4_ref.wav",
    ],
    Target: [
        "/assets/kanada_multiple_2_99_G4_S1/gen/G4_1_gen.wav",
        "/assets/kanada_multiple_2_99_G4_S1/gen/G4_2_gen.wav",
        "/assets/kanada_multiple_2_99_G4_S1/gen/G4_3_gen.wav",
        "/assets/kanada_multiple_2_99_G4_S1/gen/G4_4_gen.wav",
    ]
}

const kToks3 = {
    Source: [
        "/assets/kanada_multiple_2_99_G4_S3/ref/G4_knf_00001_00004143102_ref.wav",
        "/assets/kanada_multiple_2_99_G4_S3/ref/G4_knf_00001_00090736678_ref.wav",
        "/assets/kanada_multiple_2_99_G4_S3/ref/G4_knf_00001_00090736678_ref.wav",
        "/assets/kanada_multiple_2_99_G4_S3/ref/G4_knf_00001_00193278498_ref.wav",
    ],
    Target: [
        "/assets/kanada_multiple_2_99_G4_S3/gen/G4_knf_00001_00004143102_gen.wav",
        "/assets/kanada_multiple_2_99_G4_S3/gen/G4_knf_00001_00090736678_gen.wav",
        "/assets/kanada_multiple_2_99_G4_S3/gen/G4_knf_00001_00090736678_gen.wav",
        "/assets/kanada_multiple_2_99_G4_S3/gen/G4_knf_00001_00193278498_gen.wav",
    ]
}

const kanadaToSolinga = {
    seen: {
        Source: [
            "/assets/kanada to soliga/seen/1.wav",
            "/assets/kanada to soliga/seen/3.wav",
            "/assets/kanada to soliga/seen/101.wav"
        ],
        Target: [
            "/assets/kanada to soliga/seen/G2_1_gen_gen.wav",
            "/assets/kanada to soliga/seen/G2_3_gen_gen.wav",
            "/assets/kanada to soliga/seen/G2_101_gen_gen.wav"
        ]
    },
    unseen: {
        Source: [
            "/assets/kanada to soliga/unseen/2.wav",
            "/assets/kanada to soliga/unseen/28.wav",
            "/assets/kanada to soliga/unseen/33.wav"
        ],
        Target: [
            "/assets/kanada to soliga/unseen/G2_2_gen_gen.wav",
            "/assets/kanada to soliga/unseen/G2_28_gen_gen.wav",
            "/assets/kanada to soliga/unseen/G2_33_gen_gen.wav"
        ]
    }
}

const soligaToKanada = {
    seen: {
        Source: [
            "/assets/soliga to kanada/seen/1.wav",
            "/assets/soliga to kanada/seen/4.wav",
            "/assets/soliga to kanada/seen/11.wav"
        ],
        Target: [
            "/assets/soliga to kanada/seen/G1_1_gen_gen.wav",
            "/assets/soliga to kanada/seen/G1_4_gen_gen.wav",
            "/assets/soliga to kanada/seen/G1_11_gen_gen.wav"
        ]
    },
    unseen: {
        Source: [
            "/assets/soliga to kanada/unseen/3.wav",
            "/assets/soliga to kanada/unseen/41.wav",
            "/assets/soliga to kanada/unseen/54.wav"
        ],
        Target: [
            "/assets/soliga to kanada/unseen/G1_3_gen_gen.wav",
            "/assets/soliga to kanada/unseen/G1_41_gen_gen.wav",
            "/assets/soliga to kanada/unseen/G1_54_gen_gen.wav"
        ]
    }
}

export { kanadaToSolinga, soligaToKanada, sTok, kTok, kToks3 }
