import app from "../../..";

export default function () {
  app.get("/sdk/v1/default", async (c) => {
    return c.json({
      client: {
        BaseService: {
          HttpRetryLimit: 4,
          HttpRetryResponseCodes: [429, 503, 504],
        },
        "RateLimiter.AuthClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
        },
        "RateLimiter.PresenceClient.Operations": {
          MessageCount: 3,
          TimeIntervalInSeconds: 20,
          Operation: ["SendUpdate", "SetPresence"],
        },
        "RateLimiter.ReceiptValidatorClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
        },
        "RateLimiter.LeaderboardsClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
        },
        "RateLimiter.MetricsClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
        },
        "RateLimiter.StatsClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
        },
        "RateLimiter.InventoryClient": {
          MessageCount: 1000,
          TimeIntervalInSeconds: 60,
        },
        "RateLimiter.MatchmakingClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
        },
        "RateLimiter.SDKConfigClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
          Operation: ["RequestUpdate"],
        },
        "RateLimiter.WorldInventoryClient": {
          MessageCount: 1000,
          TimeIntervalInSeconds: 60,
        },
        "RateLimiter.TitleStorageClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
        },
        "RateLimiter.EcomClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
        },
        "RateLimiter.DataStorageClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
          Operation: [
            "GetAccessLinks",
            "QueryFile",
            "QueryFileList",
            "CopyFile",
            "DeleteFile",
            "ReadFile",
            "WriteFile",
            "DownloadFileRedirected",
            "UploadFileRedirected",
          ],
        },
        LeaderboardsClient: {
          MaxUserScoresQueryUserIds: 100,
          MaxUserScoresQueryStats: 25,
        },
        "RateLimiter.CustomInvitesClient.Operations": {
          MessageCount: 50,
          TimeIntervalInSeconds: 60,
          Operation: ["SendCustomInvite"],
        },
        HTTP: {
          HttpReceiveTimeout: 30,
          bEnableHttp: true,
          HttpTimeout: 30,
          HttpConnectionTimeout: 60,
          HttpSendTimeout: 30,
          MaxFlushTimeSeconds: 2,
        },
        "RateLimiter.FriendClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
          Operation: ["QueryFriends", "SendFriendInvite", "DeleteFriend"],
        },
        "RateLimiter.RTCAdminClient": {
          MessageCount: 50,
          TimeIntervalInSeconds: 60,
        },
        "RateLimiter.UserInfoClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
        },
        "/Script/Engine.NetworkSettings": {
          "n.VerifyPeer": false,
        },
        "WebSockets.LibWebSockets": {
          ThreadStackSize: 131072,
          ThreadTargetFrameTimeInSeconds: 0.0333,
          ThreadMinimumSleepTimeInSeconds: 0,
        },
        StatsClient: {
          MaxQueryStatsStatNamesStrLength: 1900,
        },
        "RateLimiter.MetricsClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
          Operation: ["RegisterPlayerBackendSession"],
        },
        "RateLimiter.DataStorageClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
        },
        WorldInventoryClient: {
          MaxNumberOfParallelUpdateRequestsInFlight: 3,
          SessionLockTTLSeconds: 60,
          MaxNumberOfParallelQueryRequestsInFlight: 10,
          MaxNumberOfLockEntriesPerRequest: 10,
          MaxNumberOfWriteEntriesPerRequest: 10,
          SessionLockUpdateIntervalRandomAddSeconds: 20,
          MaxNumberOfParallelLockRequestsInFlight: 3,
          SessionLockUpdateIntervalSeconds: 30,
          MaxNumberOfSubTasksPerParallelUpdateTask: 20,
          MaxNumberOfSubTasksPerParallelLockTask: 20,
          QueryInventoryPageLimit: 0,
          MaxBinaryDataSizeBytes: 10485760,
          HttpRetryResponseCodes: [429, 500, 503, 504],
          LockType: "Session",
        },
        SanitizerClient: {
          ReplaceChar: "*",
          RequestLimit: 10,
        },
        "RateLimiter.ModsClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
          Operation: [
            "InstallMod",
            "UninstallMod",
            "UpdateMod",
            "EnumerateMods",
          ],
        },
        "RateLimiter.ReportsClient.Operations": {
          MessageCount: 100,
          TimeIntervalInSeconds: 60,
          Operation: ["SendPlayerBehaviorReport"],
        },
        "RateLimiter.RTCAdminClient.Operations": {
          MessageCount: 50,
          TimeIntervalInSeconds: 60,
          Operation: ["QueryJoinRoomToken", "Kick", "SetParticipantHardMute"],
        },
        "RateLimiter.FriendClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
        },
        "RateLimiter.AchievementsClient": {
          MessageCount: 100,
          TimeIntervalInSeconds: 60,
        },
        LogFiles: {
          PurgeLogsDays: 5,
          MaxLogFilesOnDisk: 5,
          LogTimes: "SinceStart",
        },
        RateLimiter: {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
        },
        "RateLimiter.AntiCheatClient": {
          MessageCount: 120,
          TimeIntervalInSeconds: 60,
        },
        "RateLimiter.ProgressionSnapshot": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
        },
        SessionsClient: {
          HeartbeatIntervalSecs: 30,
        },
        "RateLimiter.WorldInventoryClient.Operations": {
          MessageCount: 1000,
          TimeIntervalInSeconds: 60,
          Operation: [
            "Open",
            "Close",
            "Write",
            "WriteTransaction",
            "QueryVersionMetadata",
          ],
        },
        "InventoryClient.WorldInventory": {
          MaxNumberOfParallelUpdateRequestsInFlight: 3,
          SessionLockTTLSeconds: 60,
          MaxNumberOfParallelQueryRequestsInFlight: 10,
          MaxNumberOfLockEntriesPerRequest: 10,
          MaxNumberOfWriteEntriesPerRequest: 10,
          SessionLockUpdateIntervalRandomAddSeconds: 20,
          MaxNumberOfParallelLockRequestsInFlight: 3,
          SessionLockUpdateIntervalSeconds: 30,
          MaxNumberOfSubTasksPerParallelUpdateTask: 20,
          MaxNumberOfSubTasksPerParallelLockTask: 20,
          QueryInventoryPageLimit: 0,
          MaxBinaryDataSizeBytes: 10485760,
          LockType: "Session",
        },
        "RateLimiter.UserInfoClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
          Operation: [
            "QueryLocalUserInfo",
            "QueryUserInfo",
            "QueryUserInfoByDisplayName",
            "QueryUserInfoByExternalAccount",
          ],
        },
        LobbyClient: {
          InitialResendDelayMs: 100,
          MaxConnectionRetries: 3,
          LobbySocketURL:
            "wss://api.epicgames.dev/lobby/v1/`deploymentId/lobbies/connect",
          NumConsecutiveFailuresAllowed: 5,
          MaxResendDelayMs: 2000,
          WebSocketConnectTaskMaxNetworkWaitSeconds: 15,
          RecoveryWaitTimeSecs: 2,
          InitialRetryDelaySeconds: 5,
          bDisableRTCVoice: false,
          MaxSendRetries: 3,
          SentMessageTimeout: 5,
          HeartbeatIntervalSecs: 30,
          MaxRetryIntervalSeconds: 15,
        },
        "RateLimiter.SanctionsClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
          Operation: ["QueryActivePlayerSanctions"],
        },
        "UIClient.SocialURLQueryParamNames": {
          OSName: "os_name",
          ProductId: "product_id",
          SDKCLNumber: "sdk_cl_number",
          DeploymentId: "deployment_id",
          IntegratedPlatformName: "integrated_platform_name",
          SDKVersion: "sdk_version",
          OSVersion: "os_version",
          UserId: "user_id",
          ExchangeCode: "exchange_code",
        },
        "RateLimiter.LobbyClient.ThrottledOperations": {
          MessageCount: 30,
          TimeIntervalInSeconds: 60,
          Operation: [
            "CreateLobby",
            "DestroyLobby",
            "JoinLobby",
            "LeaveLobby",
            "HeartbeatLobby",
            "PromoteMember",
            "KickLobbyMember",
            "SendLobbyInvite",
            "RejectLobbyInvite",
            "QueryInvites",
            "FindLobby",
            "RefreshRTCToken",
            "HardMuteMember",
          ],
        },
        "RateLimiter.SessionsClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
        },
        "RateLimiter.KWSClient": {
          MessageCount: 20,
          TimeIntervalInSeconds: 60,
        },
        "RateLimiter.PresenceClient": {
          MessageCount: 60,
          TimeIntervalInSeconds: 60,
        },
        "RateLimiter.KWSClient.Operations": {
          MessageCount: 20,
          TimeIntervalInSeconds: 60,
          Operation: [
            "CreateUser",
            "UpdateParentEmail",
            "QueryAgeGate",
            "QueryPermissions",
            "RequestPermissions",
          ],
        },
        "RateLimiter.InventoryClient.Operations": {
          MessageCount: 1000,
          TimeIntervalInSeconds: 60,
          Operation: ["Open", "Close", "Write"],
        },
        "RateLimiter.LeaderboardsClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
          Operation: [
            "QueryLeaderboardDefinitions",
            "QueryLeaderboardRanks",
            "QueryLeaderboardUserScores",
          ],
        },
        "RateLimiter.SanctionsClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
        },
        "Messaging.EpicConnect": {
          FailedConnectionDelayMultiplier: 2.5,
          RetryBackoffExponentialExponentBias: 0,
          ServerHeartbeatIntervalMilliseconds: 0,
          RetryBackoffMaxSeconds: 180,
          RetryBackoffJitterCoefficientMin: 0.5,
          Urlv2: "wss://connect.epicgames.dev/v2",
          ClientHeartbeatIntervalMilliseconds: 30000,
          RetryBackoffExponentialBase: 2,
          RetryBackoffJitterCoefficientMax: 1,
          FailedConnectionDelayMaxSeconds: 180,
          FailedConnectionDelayIntervalSeconds: 5,
          UseV2Connection: false,
          Url: "wss://connect.epicgames.dev",
        },
        MetricsClient: {
          HttpRetryLimit: 2,
        },
        "RateLimiter.TitleStorageClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
          Operation: ["QueryFile", "QueryFileList", "ReadFile"],
        },
        "RateLimiter.AchievementsClient.Operations": {
          MessageCount: 100,
          TimeIntervalInSeconds: 60,
          Operation: [
            "QueryDefinitions",
            "QueryPlayerAchievements",
            "UnlockAchievements",
          ],
        },
        "Messaging.Stomp": {
          ClientHeartbeatIntervalMs: 30000,
          RequestedServerHeartbeatIntervalMs: 0,
          Url: "wss://api.epicgames.dev/notifications/v1/`deploymentid`/connect",
          BlocklistMessageTypeFilters: ["lobbyinvite"],
        },
        TitleStorageClient: {
          AccessLinkDurationSeconds: 300,
          UnusedCachedFileDaysToLive: 7,
          ClearInvalidFileCacheFrequencyDays: 2,
          MaxSimultaneousReads: 10,
        },
        ConnectClient: {
          MaxProductUserIdMappingsQueryUserIds: 128,
          MinProductUserIdMappingsUpdateTimeInSeconds: 900,
        },
        "RateLimiter.LobbyClient.Operations": {
          MessageCount: 100,
          TimeIntervalInSeconds: 60,
          Operation: ["GetByLobbyId", "UpdateLobby"],
        },
        "RateLimiter.AntiCheatClient.Operations": {
          MessageCount: 120,
          TimeIntervalInSeconds: 60,
          Operation: ["QueryServiceStatus", "SendClientMessage"],
        },
        EcomClient: {
          PurchaseCookieName: "EPIC_BEARER_TOKEN",
          PurchaseEpicIdMobileLandscapeUrl:
            "https://www.epicgames.com/ecom/payment/v2/purchase",
          PurchaseEpicIdMobilePortraitUrl:
            "https://www.epicgames.com/ecom/payment/v2/purchase",
          PurchaseEpicIdUrl:
            "https://www.epicgames.com/ecom/payment/v1/purchase",
          PurchaseUrl:
            "https://launcher-website-prod07.ol.epicgames.com/purchase",
        },
        "RateLimiter.SessionsClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
          Operation: [
            "UpdateSession",
            "JoinSession",
            "StartSession",
            "EndSession",
            "RegisterPlayers",
            "SendInvite",
            "RejectInvite",
            "QueryInvites",
            "FindSession",
            "DestroySession",
          ],
        },
        "RateLimiter.StatsClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
          Operation: ["IngestStat", "QueryStats"],
        },
        "RateLimiter.ReceiptValidatorClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
          Operation: ["VerifyPurchase"],
        },
        DataStorageClient: {
          AccessLinkDurationSeconds: 300,
          MaxSimultaneousReads: 10,
          MaxSimultaneousWrites: 10,
        },
        "RateLimiter.AuthClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
          Operation: [
            "VerifyAuth",
            "DeletePersistentAuth",
            "GenerateClientAuth",
            "LinkAccount",
            "QueryIdToken",
            "VerifyIdToken",
          ],
        },
        InventoryClient: {
          MaxNumberOfParallelUpdateRequestsInFlight: 3,
          SessionLockTTLSeconds: 60,
          MaxNumberOfLockEntriesPerRequest: 10,
          MaxNumberOfWriteEntriesPerRequest: 10,
          SessionLockUpdateIntervalRandomAddSeconds: 20,
          MaxNumberOfParallelLockRequestsInFlight: 3,
          SessionLockUpdateIntervalSeconds: 30,
          MaxNumberOfSubTasksPerParallelLockTask: 20,
          HttpRetryResponseCodes: [429, 500, 503, 504],
          LockType: "Session",
          BaseUrl: "https://api.epicgames.dev/inventory",
          MaxNumberOfSubTasksPerParallelUpdateTask: 20,
          QueryInventoryPageLimit: 0,
          HttpRetryVerbs: ["GET", "HEAD", "POST"],
        },
        P2PClient: {
          IceServers: [
            "stun:stun.l.google.com:19302",
            "stun:turn.rtcp.on.epicgames.com:3478",
            "turn:turn.rtcp.on.epicgames.com:3478",
          ],
          P2PMinPort: 7777,
          P2PMaxPort: 7876,
        },
        "RateLimiter.LobbyClient": {
          MessageCount: 30,
          TimeIntervalInSeconds: 60,
        },
        SDKAnalytics: {
          BaseUrl: "https://api.epicgames.dev/telemetry/data/",
          DevPhase: 2,
          AppEnvironment: "Production",
          UploadType: "sdkevents",
        },
        "RateLimiter.ConnectClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
        },
        "AntiCheat.GameplayData": {
          Url: "wss://api.epicgames.dev/cerberus-edge/v1/",
        },
        AuthClient: {
          AccountPortalURLLocaleSuffix: "lang=`code",
          PollInterval: 5,
          RefreshTokenThreshold: 100,
          VPCRegisterURL:
            "https://epicgames.com/id/register/quick/minor/await?code=`challenge_id&display=embedded",
          AuthorizeContinuationEndpoint:
            "https://epicgames.com/id/login?continuation=`continuation&prompt=skip_merge%20skip_upgrade",
          AuthorizeCodeEndpoint:
            "https://epicgames.com/id/authorize?client_id=`client_id&response_type=code&scope=`scope&redirect_uri=`redirect_uri&display=popup&prompt=login",
          VerifyTokenInterval: 60,
          PollExpiresIn: 300,
          IdTokenCacheMinExpirySeconds: 300,
          AuthorizeEndpoint:
            "https://epicgames.com/id/authorize?exchange_code=`exchange_code&scope=`scope&prompt=skip_merge%20skip_upgrade",
          AccountPortalScheme: "eos.`client_id://epic/auth",
          bOfflineAccountToken: true,
          bFailLoginIfExternalAccountIdDoesNotMatchAuthToken: false,
          AuthorizeContinuationEmbeddedEndpoint:
            "https://epicgames.com/id/embedded/login?continuation=`continuation&prompt=skip_merge%20skip_upgrade",
        },
        "RateLimiter.ProgressionSnapshot.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
          Operation: ["SubmitSnapshot", "DeleteSnapshot"],
        },
        XMPP: {
          bEnabled: true,
          bEnableWebsockets: true,
          ThreadStackSize: 131072,
        },
        "RateLimiter.AntiCheatServer.Operations": {
          MessageCount: 100000,
          TimeIntervalInSeconds: 60,
          Operation: ["QueryServiceStatus", "SendClientMessage"],
        },
        "RateLimiter.MatchmakingClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
          Operation: [
            "SessionRegister",
            "SessionDeregister",
            "SessionAcknowledgeAssignment",
            "TicketJoin",
            "TicketClose",
            "SessionHeartbeat",
            "TicketHeartbeat",
          ],
        },
        "Core.Log": {
          LogEOS: "verbose",
          LogEOSMessaging: "verbose",
          LogEOSConnect: "verbose",
          LogEOSAuth: "verbose",
          LogHttpSerialization: "verbose",
          LogCore: "verbose",
          LogHttp: "warning",
          LogStomp: "verbose",
          LogXmpp: "verbose",
          LogEOSSessions: "verbose",
        },
        UIClient: {
          FriendsURL:
            "https://overlay-override-service.cbce.live.on.epicgames.com/",
          SocialSPAClientId: "cf27c69fe66441e8a8a4e8faf396ee4c",
          VPCURLLocaleSuffix: "&lang=`code",
          FriendsURLExchangeCodeSuffix: "?exchange_code=`exchange_code",
          VPCURL:
            "https://epicgames.com/id/overlay/quick/minor/verify?code=`challenge_id",
        },
        "RateLimiter.AntiCheatServer": {
          MessageCount: 100000,
          TimeIntervalInSeconds: 60,
        },
        "RateLimiter.InventoryClient.WorldInventory.Operations": {
          MessageCount: 1000,
          TimeIntervalInSeconds: 60,
          Operation: [
            "WorldOpen",
            "WorldClose",
            "WorldWrite",
            "WriteTransaction",
            "QueryVersionMetadata",
          ],
        },
        "Messaging.XMPP": {
          ReconnectionDelayJitter: 1.5,
          PingTimeout: 30,
          ReconnectionDelayBase: 4,
          ServerPort: 443,
          bPrivateChatFriendsOnly: true,
          ReconnectionDelayMax: 300,
          Domain: "prod.ol.epicgames.com",
          ReconnectionDelayBackoffExponent: 2,
          ServerAddr: "wss://xmpp-service-prod.ol.epicgames.com",
          PingInterval: 60,
        },
        "RateLimiter.SDKConfigClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
        },
        "RateLimiter.EcomClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
          Operation: [
            "QueryOwnership",
            "QueryOwnershipToken",
            "QueryEntitlement",
            "QueryOffer",
            "RedeemEntitlements",
            "Checkout",
          ],
        },
        PresenceClient: {
          EpicConnectNotificationWaitTime: 5,
          PresenceQueryTimeoutSeconds: 60,
          bSetOfflineOnLogoutEnabled: true,
          PresenceAutoUpdateInSeconds: 600,
          bSetOfflineOnShutdownEnabled: true,
        },
        "RateLimiter.CustomInvitesClient": {
          MessageCount: 50,
          TimeIntervalInSeconds: 60,
        },
        "RateLimiter.ModsClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
        },
        "RateLimiter.ConnectClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
          Operation: [
            "LoginAccount",
            "CreateAccount",
            "LinkAccount",
            "UnlinkAccount",
            "CreateDeviceId",
            "DeleteDeviceId",
            "TransferDeviceIdAccount",
            "QueryExternalAccountMappings",
            "QueryProductUserIdMappings",
            "VerifyIdToken",
            "RequestExchangeToken",
          ],
        },
        "RateLimiter.AuthClient.SensitiveOperations": {
          MessageCount: 12,
          TimeIntervalInSeconds: 60,
          Operation: ["GenerateUserAuth"],
        },
        "RateLimiter.ReportsClient": {
          MessageCount: 100,
          TimeIntervalInSeconds: 60,
        },
      },
      services: {
        RTCService: {
          BaseUrl: "https://api.epicgames.dev/rtc",
        },
        DataStorageService: {
          BaseUrl: "https://api.epicgames.dev/datastorage",
        },
        AccountsEpicIdService: {
          BaseUrl: "https://api.epicgames.dev",
        },
        MetricsService: {
          BaseUrl: "https://api.epicgames.dev/datarouter",
        },
        AntiCheatService: {
          BaseUrl: "https://api.epicgames.dev/anticheat",
        },
        LobbyService: {
          BaseUrl: "https://api.epicgames.dev/lobby",
        },
        StatsAchievementsService: {
          BaseUrl: "https://api.epicgames.dev/stats",
        },
        PriceEngineService: {
          BaseUrl:
            "https://priceengine-public-service-ecomprod01.ol.epicgames.com/priceengine",
        },
        MatchmakingService: {
          BaseUrl: "https://api.epicgames.dev/epic/matchmaking",
        },
        AccountsService: {
          BaseUrl: "https://egp-idsoc-proxy-prod.ol.epicgames.com/account",
          RedirectUrl: "accounts.epicgames.com",
        },
        EcommerceEpicIdService: {
          BaseUrl: "https://api.epicgames.dev/epic/ecom",
        },
        PaymentEpicIdService: {
          BaseUrl: "https://api.epicgames.dev/epic/payment",
        },
        SanctionsService: {
          BaseUrl: "https://api.epicgames.dev/sanctions",
        },
        FriendService: {
          BaseUrl: "https://egp-idsoc-proxy-prod.ol.epicgames.com/friends",
        },
        TextChatTrustedServerFNService: {
          BaseUrl: "https://api.epicgames.dev/epic/chat",
        },
        ReceiptValidatorService: {
          BaseUrl: "https://api.epicgames.dev/receipt-validator",
        },
        EcommerceService: {
          BaseUrl:
            "https://ecommerceintegration-public-service-ecomprod02.ol.epicgames.com/ecommerceintegration",
        },
        EULATrackingService: {
          BaseUrl:
            "https://eulatracking-public-service-prod06.ol.epicgames.com/eulatracking",
        },
        FriendEpicIdService: {
          BaseUrl: "https://api.epicgames.dev/epic/friends",
        },
        CatalogService: {
          BaseUrl:
            "https://catalog-public-service-prod06.ol.epicgames.com/catalog",
        },
        KWSService: {
          BaseUrl: "https://api.epicgames.dev/kws",
        },
        TextChatFNService: {
          BaseUrl: "https://api.epicgames.dev/epic/chat",
        },
        EOSAuthService: {
          BaseUrl: "https://api.epicgames.dev",
        },
        SessionsService: {
          BaseUrl: "https://api.epicgames.dev/matchmaking",
        },
        ModsService: {
          BaseUrl: "https://api.epicgames.dev/mods",
        },
        ReportsService: {
          BaseUrl: "https://api.epicgames.dev/player-reports",
        },
        ProgressionSnapshotService: {
          BaseUrl: "https://api.epicgames.dev/snapshots",
        },
        CustomInvitesService: {
          BaseUrl: "https://api.epicgames.dev/notifications",
        },
        PresenceService: {
          BaseUrl: "https://api.epicgames.dev/epic/presence",
        },
        TitleStorageService: {
          BaseUrl: "https://api.epicgames.dev/titlestorage",
        },
        StatsIngestService: {
          BaseUrl: "https://api.epicgames.dev/ingestion/stats",
        },
        TextChatGatewayServerFNService: {
          BaseUrl: "https://fngw-svc-ds-livefn.ol.epicgames.com/chat",
        },
        LeaderboardsService: {
          BaseUrl: "https://api.epicgames.dev/leaderboards",
        },
        InventoryService: {
          BaseUrl: "https://api.epicgames.dev/inventory",
        },
      },
      watermark: -36188152,
    });
  });

  app.get("/sdk/v1/product/prod-fn", async (c) => {
    return c.json({
      client: {
        BaseService: {
          HttpRetryLimit: 4,
          HttpRetryResponseCodes: [429, 503, 504],
        },
        "RateLimiter.AuthClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
        },
        "RateLimiter.PresenceClient.Operations": {
          MessageCount: 3,
          TimeIntervalInSeconds: 20,
          Operation: ["SendUpdate", "SetPresence"],
        },
        "RateLimiter.ReceiptValidatorClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
        },
        "RateLimiter.LeaderboardsClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
        },
        "RateLimiter.StatsClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
        },
        "RateLimiter.InventoryClient": {
          MessageCount: 1000,
          TimeIntervalInSeconds: 60,
        },
        "RateLimiter.MatchmakingClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
        },
        "RateLimiter.SDKConfigClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
          Operation: ["RequestUpdate"],
        },
        "RateLimiter.WorldInventoryClient": {
          MessageCount: 1000,
          TimeIntervalInSeconds: 60,
        },
        "RateLimiter.TitleStorageClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
        },
        "RateLimiter.EcomClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
        },
        "RateLimiter.DataStorageClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
          Operation: [
            "GetAccessLinks",
            "QueryFile",
            "QueryFileList",
            "CopyFile",
            "DeleteFile",
            "ReadFile",
            "WriteFile",
            "DownloadFileRedirected",
            "UploadFileRedirected",
          ],
        },
        LeaderboardsClient: {
          MaxUserScoresQueryUserIds: 100,
          MaxUserScoresQueryStats: 25,
        },
        "RateLimiter.CustomInvitesClient.Operations": {
          MessageCount: 50,
          TimeIntervalInSeconds: 60,
          Operation: ["SendCustomInvite"],
        },
        HTTP: {
          HttpReceiveTimeout: 30,
          bEnableHttp: true,
          HttpTimeout: 30,
          HttpConnectionTimeout: 60,
          HttpSendTimeout: 30,
          MaxFlushTimeSeconds: 2,
        },
        "RateLimiter.FriendClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
          Operation: ["QueryFriends", "SendFriendInvite", "DeleteFriend"],
        },
        "RateLimiter.RTCAdminClient": {
          MessageCount: 50,
          TimeIntervalInSeconds: 60,
        },
        "RateLimiter.UserInfoClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
        },
        "/Script/Engine.NetworkSettings": {
          "n.VerifyPeer": false,
        },
        "WebSockets.LibWebSockets": {
          ThreadStackSize: 131072,
          ThreadTargetFrameTimeInSeconds: 0.0333,
          ThreadMinimumSleepTimeInSeconds: 0,
        },
        StatsClient: {
          MaxQueryStatsStatNamesStrLength: 1900,
        },
        "RateLimiter.MetricsClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
          Operation: ["RegisterPlayerBackendSession"],
        },
        "RateLimiter.DataStorageClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
        },
        WorldInventoryClient: {
          MaxBinaryDataSizeBytes: 104857600,
          BaseUrlLive:
            "https://fngw-svc-ds-livefn.ol.epicgames.com/api/inventory",
        },
        SanitizerClient: {
          ReplaceChar: "*",
          RequestLimit: 10,
        },
        "RateLimiter.ModsClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
          Operation: [
            "InstallMod",
            "UninstallMod",
            "UpdateMod",
            "EnumerateMods",
          ],
        },
        "RateLimiter.ReportsClient.Operations": {
          MessageCount: 100,
          TimeIntervalInSeconds: 60,
          Operation: ["SendPlayerBehaviorReport"],
        },
        "RateLimiter.RTCAdminClient.Operations": {
          MessageCount: 50,
          TimeIntervalInSeconds: 60,
          Operation: ["QueryJoinRoomToken", "Kick", "SetParticipantHardMute"],
        },
        "RateLimiter.K3SClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
        },
        "RateLimiter.FriendClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
        },
        "RateLimiter.AchievementsClient": {
          MessageCount: 100,
          TimeIntervalInSeconds: 60,
        },
        LogFiles: {
          PurgeLogsDays: 5,
          MaxLogFilesOnDisk: 5,
          LogTimes: "SinceStart",
        },
        RateLimiter: {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
        },
        "RateLimiter.AntiCheatClient": {
          MessageCount: 120,
          TimeIntervalInSeconds: 60,
        },
        "RateLimiter.ProgressionSnapshot": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
        },
        SessionsClient: {
          HeartbeatIntervalSecs: 30,
        },
        "RateLimiter.WorldInventoryClient.Operations": {
          MessageCount: 1000,
          TimeIntervalInSeconds: 60,
          Operation: [
            "Open",
            "Close",
            "Write",
            "WriteTransaction",
            "QueryVersionMetadata",
          ],
        },
        "InventoryClient.WorldInventory": {
          MaxBinaryDataSizeBytes: 104857600,
          BaseUrlLive:
            "https://fngw-svc-ds-livefn.ol.epicgames.com/api/inventory",
        },
        "RateLimiter.UserInfoClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
          Operation: [
            "QueryLocalUserInfo",
            "QueryUserInfo",
            "QueryUserInfoByDisplayName",
            "QueryUserInfoByExternalAccount",
          ],
        },
        LobbyClient: {
          InitialResendDelayMs: 100,
          MaxConnectionRetries: 3,
          LobbySocketURL:
            "wss://api.epicgames.dev/lobby/v1/`deploymentId/lobbies/connect",
          NumConsecutiveFailuresAllowed: 5,
          MaxResendDelayMs: 2000,
          WebSocketConnectTaskMaxNetworkWaitSeconds: 15,
          RecoveryWaitTimeSecs: 2,
          InitialRetryDelaySeconds: 5,
          bDisableRTCVoice: false,
          MaxSendRetries: 3,
          SentMessageTimeout: 5,
          HeartbeatIntervalSecs: 30,
          MaxRetryIntervalSeconds: 15,
        },
        "RateLimiter.SanctionsClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
          Operation: ["QueryActivePlayerSanctions"],
        },
        "UIClient.SocialURLQueryParamNames": {
          OSName: "os_name",
          ProductId: "product_id",
          SDKCLNumber: "sdk_cl_number",
          DeploymentId: "deployment_id",
          IntegratedPlatformName: "integrated_platform_name",
          SDKVersion: "sdk_version",
          OSVersion: "os_version",
          UserId: "user_id",
          ExchangeCode: "exchange_code",
        },
        "RateLimiter.LobbyClient.ThrottledOperations": {
          MessageCount: 30,
          TimeIntervalInSeconds: 60,
          Operation: [
            "CreateLobby",
            "DestroyLobby",
            "JoinLobby",
            "LeaveLobby",
            "HeartbeatLobby",
            "PromoteMember",
            "KickLobbyMember",
            "SendLobbyInvite",
            "RejectLobbyInvite",
            "QueryInvites",
            "FindLobby",
            "RefreshRTCToken",
            "HardMuteMember",
          ],
        },
        "RateLimiter.SessionsClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
        },
        "RateLimiter.KWSClient": {
          MessageCount: 20,
          TimeIntervalInSeconds: 60,
        },
        "RateLimiter.PresenceClient": {
          MessageCount: 60,
          TimeIntervalInSeconds: 60,
        },
        "RateLimiter.KWSClient.Operations": {
          MessageCount: 20,
          TimeIntervalInSeconds: 60,
          Operation: [
            "CreateUser",
            "UpdateParentEmail",
            "QueryAgeGate",
            "QueryPermissions",
            "RequestPermissions",
          ],
        },
        "RateLimiter.InventoryClient.Operations": {
          MessageCount: 1000,
          TimeIntervalInSeconds: 60,
          Operation: ["Open", "Close"],
        },
        "RateLimiter.LeaderboardsClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
          Operation: [
            "QueryLeaderboardDefinitions",
            "QueryLeaderboardRanks",
            "QueryLeaderboardUserScores",
          ],
        },
        "RateLimiter.SanctionsClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
        },
        "Messaging.EpicConnect": {
          FailedConnectionDelayMultiplier: 2.5,
          RetryBackoffExponentialExponentBias: 0,
          ServerHeartbeatIntervalMilliseconds: 0,
          RetryBackoffMaxSeconds: 180,
          RetryBackoffJitterCoefficientMin: 0.5,
          Urlv2: "wss://connect.epicgames.dev/v2",
          ClientHeartbeatIntervalMilliseconds: 30000,
          RetryBackoffExponentialBase: 2,
          RetryBackoffJitterCoefficientMax: 1,
          FailedConnectionDelayMaxSeconds: 180,
          FailedConnectionDelayIntervalSeconds: 5,
          UseV2Connection: false,
          Url: "wss://connect.epicgames.dev",
        },
        MetricsClient: {
          HttpRetryLimit: 2,
        },
        "RateLimiter.TitleStorageClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
          Operation: ["QueryFile", "QueryFileList", "ReadFile"],
        },
        "RateLimiter.AchievementsClient.Operations": {
          MessageCount: 100,
          TimeIntervalInSeconds: 60,
          Operation: [
            "QueryDefinitions",
            "QueryPlayerAchievements",
            "UnlockAchievements",
          ],
        },
        "Messaging.Stomp": {
          Url: "",
          ClientHeartbeatIntervalMs: 30000,
          InitialRetryDelaySeconds: 3600,
          RequestedServerHeartbeatIntervalMs: 0,
          MaxRetryIntervalSeconds: 3600,
        },
        TitleStorageClient: {
          AccessLinkDurationSeconds: 300,
          UnusedCachedFileDaysToLive: 7,
          ClearInvalidFileCacheFrequencyDays: 2,
          MaxSimultaneousReads: 10,
        },
        TrustAndSafety: {
          bQueryLocalPrivilegeEnabled: false,
        },
        ConnectClient: {
          MaxProductUserIdMappingsQueryUserIds: 128,
          MinProductUserIdMappingsUpdateTimeInSeconds: 900,
        },
        "RateLimiter.LobbyClient.Operations": {
          MessageCount: 100,
          TimeIntervalInSeconds: 60,
          Operation: ["GetByLobbyId", "UpdateLobby"],
        },
        "RateLimiter.AntiCheatClient.Operations": {
          MessageCount: 120,
          TimeIntervalInSeconds: 60,
          Operation: ["QueryServiceStatus", "SendClientMessage"],
        },
        EcomClient: {
          PurchaseCookieName: "EPIC_BEARER_TOKEN",
          PurchaseEpicIdMobileLandscapeUrl:
            "https://www.epicgames.com/ecom/payment/v2/purchase",
          PurchaseEpicIdMobilePortraitUrl:
            "https://www.epicgames.com/ecom/payment/v2/purchase",
          PurchaseEpicIdUrl:
            "https://www.epicgames.com/ecom/payment/v1/purchase",
          PurchaseUrl:
            "https://launcher-website-prod07.ol.epicgames.com/purchase",
        },
        "RateLimiter.SessionsClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
          Operation: [
            "UpdateSession",
            "JoinSession",
            "StartSession",
            "EndSession",
            "RegisterPlayers",
            "SendInvite",
            "RejectInvite",
            "QueryInvites",
            "FindSession",
            "DestroySession",
          ],
        },
        "RateLimiter.StatsClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
          Operation: ["IngestStat", "QueryStats"],
        },
        "RateLimiter.ReceiptValidatorClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
          Operation: ["VerifyPurchase"],
        },
        DataStorageClient: {
          AccessLinkDurationSeconds: 300,
          MaxSimultaneousReads: 10,
          MaxSimultaneousWrites: 10,
        },
        "RateLimiter.AuthClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
          Operation: [
            "VerifyAuth",
            "DeletePersistentAuth",
            "GenerateClientAuth",
            "LinkAccount",
            "QueryIdToken",
            "VerifyIdToken",
          ],
        },
        InventoryClient: {
          MaxNumberOfParallelUpdateRequestsInFlight: 3,
          SessionLockTTLSeconds: 60,
          MaxNumberOfLockEntriesPerRequest: 10,
          MaxNumberOfWriteEntriesPerRequest: 10,
          SessionLockUpdateIntervalRandomAddSeconds: 20,
          MaxNumberOfParallelLockRequestsInFlight: 3,
          SessionLockUpdateIntervalSeconds: 30,
          MaxNumberOfSubTasksPerParallelLockTask: 20,
          BaseUrlLive:
            "https://fngw-svc-ds-livefn.ol.epicgames.com/api/inventory",
          HttpRetryResponseCodes: [429, 500, 503, 504],
          LockType: "Session",
          BaseUrl: "https://fngw-svc-ds-prod.ol.epicgames.com/api/inventory",
          MaxNumberOfSubTasksPerParallelUpdateTask: 20,
          QueryInventoryPageLimit: 0,
          HttpRetryVerbs: ["GET", "HEAD", "POST"],
        },
        P2PClient: {
          IceServers: [
            "stun:stun.l.google.com:19302",
            "stun:turn.rtcp.on.epicgames.com:3478",
            "turn:turn.rtcp.on.epicgames.com:3478",
          ],
          P2PMinPort: 7777,
          P2PMaxPort: 7876,
        },
        "RateLimiter.LobbyClient": {
          MessageCount: 30,
          TimeIntervalInSeconds: 60,
        },
        SDKAnalytics: {
          BaseUrl: "https://api.epicgames.dev/telemetry/data/",
          DevPhase: 2,
          AppEnvironment: "Production",
          UploadType: "sdkevents",
        },
        TextChatServerFN: {
          TextChatGatewayServerURL:
            "https://fngw-svc-ds-livefn.ol.epicgames.com/chat",
        },
        "RateLimiter.ConnectClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
        },
        "RateLimiter.InventoryClient.ThrottledOperations": {
          MessageCount: 20000,
          TimeIntervalInSeconds: 60,
          Operation: ["Write"],
        },
        "RateLimiter.MetricsClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
        },
        "AntiCheat.GameplayData": {
          Url: "wss://api.epicgames.dev/cerberus-edge/v1/",
          MinCompressibleMessageSize: 4096,
        },
        AuthClient: {
          AccountPortalURLLocaleSuffix: "lang=`code",
          PollInterval: 5,
          RefreshTokenThreshold: 100,
          VPCRegisterURL:
            "https://epicgames.com/id/register/quick/minor/await?code=`challenge_id&display=embedded",
          AuthorizeContinuationEndpoint:
            "https://epicgames.com/id/login?continuation=`continuation&prompt=skip_merge%20skip_upgrade",
          AuthorizeCodeEndpoint:
            "https://epicgames.com/id/authorize?client_id=`client_id&response_type=code&scope=`scope&redirect_uri=`redirect_uri&display=popup&prompt=login",
          VerifyTokenInterval: 600,
          PollExpiresIn: 300,
          IdTokenCacheMinExpirySeconds: 300,
          AuthorizeEndpoint:
            "https://epicgames.com/id/authorize?exchange_code=`exchange_code&scope=`scope&prompt=skip_merge%20skip_upgrade",
          AccountPortalScheme: "eos.`client_id://epic/auth",
          bOfflineAccountToken: true,
          bFailLoginIfExternalAccountIdDoesNotMatchAuthToken: false,
          AuthorizeContinuationEmbeddedEndpoint:
            "https://epicgames.com/id/embedded/login?continuation=`continuation&prompt=skip_merge%20skip_upgrade",
        },
        "RateLimiter.ProgressionSnapshot.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
          Operation: ["SubmitSnapshot", "DeleteSnapshot"],
        },
        XMPP: {
          bEnabled: true,
          bEnableWebsockets: true,
          ThreadStackSize: 131072,
        },
        "RateLimiter.AntiCheatServer.Operations": {
          MessageCount: 100000,
          TimeIntervalInSeconds: 60,
          Operation: ["QueryServiceStatus", "SendClientMessage"],
        },
        "RateLimiter.MatchmakingClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
          Operation: [
            "SessionRegister",
            "SessionDeregister",
            "SessionAcknowledgeAssignment",
            "TicketJoin",
            "TicketClose",
            "SessionHeartbeat",
            "TicketHeartbeat",
          ],
        },
        "K3SClient.RemainingPlaytimeLimits": {
          play: [1800, 900, 600, 120, 0],
          create: [1800, 900, 600, 120, 0],
        },
        "Core.Log": {
          LogEOS: "verbose",
          LogEOSMessaging: "verbose",
          LogEOSConnect: "verbose",
          LogEOSAuth: "verbose",
          LogHttpSerialization: "verbose",
          LogCore: "verbose",
          LogHttp: "warning",
          LogStomp: "verbose",
          LogXmpp: "verbose",
          LogEOSSessions: "verbose",
        },
        UIClient: {
          FriendsURL:
            "https://overlay-override-service.cbce.live.on.epicgames.com/",
          SocialSPAClientId: "cf27c69fe66441e8a8a4e8faf396ee4c",
          VPCURLLocaleSuffix: "&lang=`code",
          FriendsURLExchangeCodeSuffix: "?exchange_code=`exchange_code",
          VPCURL:
            "https://epicgames.com/id/overlay/quick/minor/verify?code=`challenge_id",
        },
        "RateLimiter.AntiCheatServer": {
          MessageCount: 100000,
          TimeIntervalInSeconds: 60,
        },
        "RateLimiter.InventoryClient.WorldInventory.Operations": {
          MessageCount: 1000,
          TimeIntervalInSeconds: 60,
          Operation: [
            "WorldOpen",
            "WorldClose",
            "WorldWrite",
            "WriteTransaction",
            "QueryVersionMetadata",
          ],
        },
        "Messaging.XMPP": {
          ReconnectionDelayJitter: 1.5,
          PingTimeout: 30,
          ReconnectionDelayBase: 4,
          ServerPort: 443,
          bPrivateChatFriendsOnly: true,
          ReconnectionDelayMax: 300,
          Domain: "prod.ol.epicgames.com",
          ReconnectionDelayBackoffExponent: 2,
          ServerAddr: "wss://xmpp-service-prod.ol.epicgames.com",
          PingInterval: 60,
        },
        "RateLimiter.K3SClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
          Operation: [
            "QuerySettings",
            "UpdateSettings",
            "RequestAdditionalPlaytime",
            "GrantAdditionalPlaytime",
          ],
        },
        "RateLimiter.SDKConfigClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
        },
        "RateLimiter.EcomClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
          Operation: [
            "QueryOwnership",
            "QueryOwnershipToken",
            "QueryEntitlement",
            "QueryOffer",
            "RedeemEntitlements",
            "Checkout",
          ],
        },
        PresenceClient: {
          EpicConnectNotificationWaitTime: 5,
          PresenceQueryTimeoutSeconds: 60,
          bSetOfflineOnLogoutEnabled: true,
          PresenceAutoUpdateInSeconds: 600,
          bSetOfflineOnShutdownEnabled: true,
        },
        "RateLimiter.CustomInvitesClient": {
          MessageCount: 50,
          TimeIntervalInSeconds: 60,
        },
        "RateLimiter.ModsClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
        },
        "RateLimiter.ConnectClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60,
          Operation: [
            "LoginAccount",
            "CreateAccount",
            "LinkAccount",
            "UnlinkAccount",
            "CreateDeviceId",
            "DeleteDeviceId",
            "TransferDeviceIdAccount",
            "QueryExternalAccountMappings",
            "QueryProductUserIdMappings",
            "VerifyIdToken",
            "RequestExchangeToken",
          ],
        },
        "RateLimiter.AuthClient.SensitiveOperations": {
          MessageCount: 12,
          TimeIntervalInSeconds: 60,
          Operation: ["GenerateUserAuth"],
        },
        "RateLimiter.ReportsClient": {
          MessageCount: 100,
          TimeIntervalInSeconds: 60,
        },
      },
      services: {
        RTCService: {
          BaseUrl: "https://api.epicgames.dev/rtc",
        },
        DataStorageService: {
          BaseUrl: "https://api.epicgames.dev/datastorage",
        },
        AccountsEpicIdService: {
          BaseUrl: "https://api.epicgames.dev",
        },
        MetricsService: {
          BaseUrl: "https://api.epicgames.dev/datarouter",
        },
        LobbyService: {
          BaseUrl: "https://api.epicgames.dev/lobby",
        },
        StatsAchievementsService: {
          BaseUrl: "https://api.epicgames.dev/stats",
        },
        PriceEngineService: {
          BaseUrl:
            "https://priceengine-public-service-ecomprod01.ol.epicgames.com/priceengine",
        },
        MatchmakingService: {
          BaseUrl: "https://api.epicgames.dev/epic/matchmaking",
        },
        AccountsService: {
          BaseUrl: "https://egp-idsoc-proxy-prod.ol.epicgames.com/account",
          RedirectUrl: "accounts.epicgames.com",
        },
        EcommerceEpicIdService: {
          BaseUrl: "https://api.epicgames.dev/epic/ecom",
        },
        PaymentEpicIdService: {
          BaseUrl: "https://api.epicgames.dev/epic/payment",
        },
        SanctionsService: {
          BaseUrl: "https://api.epicgames.dev/sanctions",
        },
        FriendService: {
          BaseUrl: "https://egp-idsoc-proxy-prod.ol.epicgames.com/friends",
        },
        TextChatTrustedServerFNService: {
          BaseUrl: "https://api.epicgames.dev/epic/chat",
        },
        ReceiptValidatorService: {
          BaseUrl: "https://api.epicgames.dev/receipt-validator",
        },
        EcommerceService: {
          BaseUrl:
            "https://ecommerceintegration-public-service-ecomprod02.ol.epicgames.com/ecommerceintegration",
        },
        EULATrackingService: {
          BaseUrl:
            "https://eulatracking-public-service-prod06.ol.epicgames.com/eulatracking",
        },
        FriendEpicIdService: {
          BaseUrl: "https://api.epicgames.dev/epic/friends",
        },
        CatalogService: {
          BaseUrl:
            "https://catalog-public-service-prod06.ol.epicgames.com/catalog",
        },
        KWSService: {
          BaseUrl: "https://api.epicgames.dev/kws",
        },
        TextChatFNService: {
          BaseUrl: "https://api.epicgames.dev/epic/chat",
        },
        PlaytimeTrackingService: {
          BaseUrl: "https://api.kws.ol.epicgames.com",
        },
        AntiCheatService: {
          BaseUrl: "https://api.epicgames.dev/anticheat",
        },
        EOSAuthService: {
          BaseUrl: "https://api.epicgames.dev",
        },
        SessionsService: {
          BaseUrl: "https://api.epicgames.dev/matchmaking",
        },
        ModsService: {
          BaseUrl: "https://api.epicgames.dev/mods",
        },
        ReportsService: {
          BaseUrl: "https://api.epicgames.dev/player-reports",
        },
        ProgressionSnapshotService: {
          BaseUrl: "https://api.epicgames.dev/snapshots",
        },
        CustomInvitesService: {
          BaseUrl: "https://api.epicgames.dev/notifications",
        },
        PresenceService: {
          BaseUrl: "https://api.epicgames.dev/epic/presence",
        },
        TitleStorageService: {
          BaseUrl: "https://api.epicgames.dev/titlestorage",
        },
        StatsIngestService: {
          BaseUrl: "https://api.epicgames.dev/ingestion/stats",
        },
        SupervisedSettingsService: {
          BaseUrl: "https://api.kws.ol.epicgames.com",
        },
        TextChatGatewayServerFNService: {
          BaseUrl: "https://fngw-svc-ds-livefn.ol.epicgames.com/chat",
        },
        LeaderboardsService: {
          BaseUrl: "https://api.epicgames.dev/leaderboards",
        },
        InventoryService: {
          BaseUrl: "https://fngw-svc-ds-livefn.ol.epicgames.com/api/inventory",
        },
      },
      watermark: -36188152,
    });
  });

  app.get("/sdk/v1/*", async (c) => {
    return c.json({
      client: {
        "RateLimiter.InventoryClient": {
          MessageCount: 100,
          TimeIntervalInSeconds: 60.0,
        },
        BaseService: {
          HttpRetryLimit: 4,
          HttpRetryResponseCodes: [429, 503, 504],
        },
        "RateLimiter.AuthClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
        },
        "RateLimiter.PresenceClient.Operations": {
          MessageCount: 3,
          TimeIntervalInSeconds: 20.0,
          Operation: ["SendUpdate", "SetPresence"],
        },
        "RateLimiter.ReceiptValidatorClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
        },
        "RateLimiter.LeaderboardsClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
        },
        "RateLimiter.MetricsClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
        },
        "RateLimiter.StatsClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
        },
        "RateLimiter.SDKConfigClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
          Operation: ["RequestUpdate"],
        },
        "RateLimiter.TitleStorageClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
        },
        "RateLimiter.EcomClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
        },
        "RateLimiter.DataStorageClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
          Operation: [
            "GetAccessLinks",
            "QueryFile",
            "QueryFileList",
            "CopyFile",
            "DeleteFile",
            "ReadFile",
            "WriteFile",
            "DownloadFileRedirected",
            "UploadFileRedirected",
          ],
        },
        LeaderboardsClient: {
          MaxUserScoresQueryUserIds: 100,
          MaxUserScoresQueryStats: 25,
        },
        "RateLimiter.CustomInvitesClient.Operations": {
          MessageCount: 50,
          TimeIntervalInSeconds: 60.0,
          Operation: ["SendCustomInvite"],
        },
        HTTP: {
          HttpReceiveTimeout: 30,
          bEnableHttp: true,
          HttpTimeout: 30,
          HttpConnectionTimeout: 60,
          HttpSendTimeout: 30,
          MaxFlushTimeSeconds: 2.0,
        },
        "RateLimiter.FriendClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
          Operation: ["QueryFriends", "SendFriendInvite", "DeleteFriend"],
        },
        "RateLimiter.RTCAdminClient": {
          MessageCount: 50,
          TimeIntervalInSeconds: 60.0,
        },
        "RateLimiter.UserInfoClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
        },
        "/Script/Engine.NetworkSettings": {
          "n.VerifyPeer": false,
        },
        "WebSockets.LibWebSockets": {
          ThreadStackSize: 131072,
          ThreadTargetFrameTimeInSeconds: 0.0333,
          ThreadMinimumSleepTimeInSeconds: 0.0,
        },
        StatsClient: {
          MaxQueryStatsStatNamesStrLength: 1900,
        },
        "RateLimiter.MetricsClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
          Operation: ["RegisterPlayerBackendSession"],
        },
        "RateLimiter.DataStorageClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
        },
        SanitizerClient: {
          ReplaceChar: "*",
          RequestLimit: 10,
        },
        "RateLimiter.ModsClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
          Operation: [
            "InstallMod",
            "UninstallMod",
            "UpdateMod",
            "EnumerateMods",
          ],
        },
        "RateLimiter.ReportsClient.Operations": {
          MessageCount: 100,
          TimeIntervalInSeconds: 60.0,
          Operation: ["SendPlayerBehaviorReport"],
        },
        "RateLimiter.RTCAdminClient.Operations": {
          MessageCount: 50,
          TimeIntervalInSeconds: 60.0,
          Operation: ["QueryJoinRoomToken", "Kick", "SetParticipantHardMute"],
        },
        "RateLimiter.FriendClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
        },
        "RateLimiter.AchievementsClient": {
          MessageCount: 100,
          TimeIntervalInSeconds: 60.0,
        },
        LogFiles: {
          PurgeLogsDays: 5,
          MaxLogFilesOnDisk: 5,
          LogTimes: "SinceStart",
        },
        RateLimiter: {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
        },
        "RateLimiter.AntiCheatClient": {
          MessageCount: 120,
          TimeIntervalInSeconds: 60.0,
        },
        "RateLimiter.ProgressionSnapshot": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
        },
        SessionsClient: {
          HeartbeatIntervalSecs: 30,
        },
        "RateLimiter.UserInfoClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
          Operation: [
            "QueryLocalUserInfo",
            "QueryUserInfo",
            "QueryUserInfoByDisplayName",
            "QueryUserInfoByExternalAccount",
          ],
        },
        LobbyClient: {
          InitialResendDelayMs: 100,
          MaxConnectionRetries: 3,
          LobbySocketURL:
            "wss://api.epicgames.dev/lobby/v1/`deploymentId/lobbies/connect",
          NumConsecutiveFailuresAllowed: 5,
          MaxResendDelayMs: 2000,
          WebSocketConnectTaskMaxNetworkWaitSeconds: 15.0,
          RecoveryWaitTimeSecs: 2,
          InitialRetryDelaySeconds: 5,
          MaxSendRetries: 3,
          SentMessageTimeout: 5,
          HeartbeatIntervalSecs: 30,
          MaxRetryIntervalSeconds: 15,
        },
        "RateLimiter.SanctionsClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
          Operation: ["QueryActivePlayerSanctions"],
        },
        "UIClient.SocialURLQueryParamNames": {
          OSName: "os_name",
          ProductId: "product_id",
          SDKCLNumber: "sdk_cl_number",
          DeploymentId: "deployment_id",
          IntegratedPlatformName: "integrated_platform_name",
          SDKVersion: "sdk_version",
          OSVersion: "os_version",
          UserId: "user_id",
          ExchangeCode: "exchange_code",
        },
        "RateLimiter.LobbyClient.ThrottledOperations": {
          MessageCount: 30,
          TimeIntervalInSeconds: 60.0,
          Operation: [
            "CreateLobby",
            "DestroyLobby",
            "JoinLobby",
            "LeaveLobby",
            "HeartbeatLobby",
            "UpdateLobby",
            "PromoteMember",
            "KickLobbyMember",
            "SendLobbyInvite",
            "RejectLobbyInvite",
            "QueryInvites",
            "FindLobby",
            "RefreshRTCToken",
            "HardMuteMember",
          ],
        },
        "RateLimiter.SessionsClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
        },
        "RateLimiter.KWSClient": {
          MessageCount: 20,
          TimeIntervalInSeconds: 60.0,
        },
        "RateLimiter.PresenceClient": {
          MessageCount: 60,
          TimeIntervalInSeconds: 60.0,
        },
        "RateLimiter.KWSClient.Operations": {
          MessageCount: 20,
          TimeIntervalInSeconds: 60.0,
          Operation: [
            "CreateUser",
            "UpdateParentEmail",
            "QueryAgeGate",
            "QueryPermissions",
            "RequestPermissions",
          ],
        },
        "RateLimiter.InventoryClient.Operations": {
          MessageCount: 100,
          TimeIntervalInSeconds: 60.0,
          Operation: ["Open", "Close"],
        },
        "RateLimiter.LeaderboardsClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
          Operation: [
            "QueryLeaderboardDefinitions",
            "QueryLeaderboardRanks",
            "QueryLeaderboardUserScores",
          ],
        },
        "RateLimiter.SanctionsClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
        },
        "Messaging.EpicConnect": {
          FailedConnectionDelayMultiplier: 2.5,
          ServerHeartbeatIntervalMilliseconds: 0,
          FailedConnectionDelayMaxSeconds: 180,
          ClientHeartbeatIntervalMilliseconds: 30000,
          FailedConnectionDelayIntervalSeconds: 5,
          Url: "wss://connect.epicgames.dev",
        },
        MetricsClient: {
          HttpRetryLimit: 2,
        },
        "RateLimiter.TitleStorageClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
          Operation: ["QueryFile", "QueryFileList", "ReadFile"],
        },
        "RateLimiter.AchievementsClient.Operations": {
          MessageCount: 100,
          TimeIntervalInSeconds: 60.0,
          Operation: [
            "QueryDefinitions",
            "QueryPlayerAchievements",
            "UnlockAchievements",
          ],
        },
        "Messaging.Stomp": {
          ClientHeartbeatIntervalMs: 30000,
          RequestedServerHeartbeatIntervalMs: 30000,
          Url: "wss://api.epicgames.dev/notifications/v1/`deploymentid`/connect",
          BlocklistMessageTypeFilters: ["lobbyinvite"],
        },
        TitleStorageClient: {
          AccessLinkDurationSeconds: 300,
          UnusedCachedFileDaysToLive: 7,
          ClearInvalidFileCacheFrequencyDays: 2,
          MaxSimultaneousReads: 10,
        },
        ConnectClient: {
          MaxProductUserIdMappingsQueryUserIds: 128,
          MinProductUserIdMappingsUpdateTimeInSeconds: 900.0,
        },
        "RateLimiter.LobbyClient.Operations": {
          MessageCount: 100,
          TimeIntervalInSeconds: 60.0,
          Operation: ["GetByLobbyId", "UpdateLobby"],
        },
        "RateLimiter.AntiCheatClient.Operations": {
          MessageCount: 120,
          TimeIntervalInSeconds: 60.0,
          Operation: ["QueryServiceStatus", "SendClientMessage"],
        },
        EcomClient: {
          PurchaseUrl:
            "https://launcher-website-prod07.ol.epicgames.com/purchase",
          PurchaseCookieName: "EPIC_BEARER_TOKEN",
          PurchaseEpicIdUrl:
            "https://www.epicgames.com/ecom/payment/v1/purchase",
        },
        "RateLimiter.SessionsClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
          Operation: [
            "UpdateSession",
            "JoinSession",
            "StartSession",
            "EndSession",
            "RegisterPlayers",
            "SendInvite",
            "RejectInvite",
            "QueryInvites",
            "FindSession",
            "DestroySession",
          ],
        },
        "RateLimiter.StatsClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
          Operation: ["IngestStat", "QueryStats"],
        },
        "RateLimiter.ReceiptValidatorClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
          Operation: ["VerifyPurchase"],
        },
        DataStorageClient: {
          AccessLinkDurationSeconds: 300,
          MaxSimultaneousReads: 10,
          MaxSimultaneousWrites: 10,
        },
        "RateLimiter.AuthClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
          Operation: [
            "VerifyAuth",
            "DeletePersistentAuth",
            "GenerateClientAuth",
            "LinkAccount",
            "QueryIdToken",
            "VerifyIdToken",
          ],
        },
        P2PClient: {
          IceServers: [
            "stun:stun.l.google.com:19302",
            "stun:turn.rtcp.on.epicgames.com:3478",
            "turn:turn.rtcp.on.epicgames.com:3478",
          ],
          P2PMinPort: 7777,
          P2PMaxPort: 7876,
        },
        "RateLimiter.LobbyClient": {
          MessageCount: 30,
          TimeIntervalInSeconds: 60.0,
        },
        SDKAnalytics: {
          BaseUrl: "https://api.epicgames.dev/telemetry/data/",
          DevPhase: 2,
          AppEnvironment: "Production",
          UploadType: "sdkevents",
        },
        "RateLimiter.ConnectClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
        },
        "AntiCheat.GameplayData": {
          Url: "wss://api.epicgames.dev/cerberus-edge/v1/",
        },
        AuthClient: {
          AccountPortalURLLocaleSuffix: "lang=`code",
          PollInterval: 5,
          RefreshTokenThreshold: 100.0,
          VPCRegisterURL:
            "https://epicgames.com/id/register/quick/minor/await?code=`challenge_id&display=embedded",
          AuthorizeContinuationEndpoint:
            "https://epicgames.com/id/login?continuation=`continuation&prompt=skip_merge%20skip_upgrade",
          AuthorizeCodeEndpoint:
            "https://epicgames.com/id/authorize?client_id=`client_id&response_type=code&scope=`scope&redirect_uri=`redirect_uri&display=popup&prompt=login",
          AuthorizeContinuationEmbeddedEndpoint:
            "https://epicgames.com/id/embedded/login?continuation=`continuation&prompt=skip_merge%20skip_upgrade",
          VerifyTokenInterval: 60.0,
          PollExpiresIn: 300,
          IdTokenCacheMinExpirySeconds: 300,
          AuthorizeEndpoint:
            "https://epicgames.com/id/authorize?exchange_code=`exchange_code&scope=`scope&prompt=skip_merge%20skip_upgrade",
          AccountPortalScheme: "eos.`client_id://epic/auth",
          bOfflineAccountToken: true,
        },
        "RateLimiter.ProgressionSnapshot.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
          Operation: ["SubmitSnapshot", "DeleteSnapshot"],
        },
        XMPP: {
          bEnabled: true,
          bEnableWebsockets: true,
          ThreadStackSize: 131072,
        },
        "RateLimiter.AntiCheatServer.Operations": {
          MessageCount: 100000,
          TimeIntervalInSeconds: 60.0,
          Operation: ["QueryServiceStatus", "SendClientMessage"],
        },
        "Core.Log": {
          LogEOS: "verbose",
          LogEOSMessaging: "verbose",
          LogEOSConnect: "verbose",
          LogEOSAuth: "verbose",
          LogHttpSerialization: "verbose",
          LogCore: "verbose",
          LogHttp: "warning",
          LogStomp: "verbose",
          LogXmpp: "verbose",
          LogEOSSessions: "verbose",
        },
        UIClient: {
          FriendsURL:
            "https://epic-social-game-overlay-prod.ol.epicgames.com/index.html",
          SocialSPAClientId: "cf27c69fe66441e8a8a4e8faf396ee4c",
          VPCURLLocaleSuffix: "&lang=`code",
          FriendsURLExchangeCodeSuffix: "?exchange_code=`exchange_code",
          VPCURL:
            "https://epicgames.com/id/overlay/quick/minor/verify?code=`challenge_id",
        },
        "RateLimiter.AntiCheatServer": {
          MessageCount: 100000,
          TimeIntervalInSeconds: 60.0,
        },
        "Messaging.XMPP": {
          ReconnectionDelayJitter: 1.5,
          PingTimeout: 30,
          ReconnectionDelayBase: 4.0,
          ServerPort: 443,
          bPrivateChatFriendsOnly: true,
          ReconnectionDelayMax: 300.0,
          Domain: "prod.ol.epicgames.com",
          ReconnectionDelayBackoffExponent: 2.0,
          ServerAddr: "wss://xmpp-service-prod.ol.epicgames.com",
          PingInterval: 60,
        },
        "RateLimiter.SDKConfigClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
        },
        "RateLimiter.EcomClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
          Operation: [
            "QueryOwnership",
            "QueryOwnershipToken",
            "QueryEntitlement",
            "QueryOffer",
            "RedeemEntitlements",
            "Checkout",
          ],
        },
        PresenceClient: {
          EpicConnectNotificationWaitTime: 99999995.0,
          PresenceQueryTimeoutSeconds: 1.0,
          bSetOfflineOnLogoutEnabled: false,
          PresenceAutoUpdateInSeconds: 999999600.0,
          bSetOfflineOnShutdownEnabled: false,
        },
        "RateLimiter.CustomInvitesClient": {
          MessageCount: 50,
          TimeIntervalInSeconds: 60.0,
        },
        "RateLimiter.ModsClient": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
        },
        "RateLimiter.ConnectClient.Operations": {
          MessageCount: 300,
          TimeIntervalInSeconds: 60.0,
          Operation: [
            "LoginAccount",
            "CreateAccount",
            "LinkAccount",
            "UnlinkAccount",
            "CreateDeviceId",
            "DeleteDeviceId",
            "TransferDeviceIdAccount",
            "QueryExternalAccountMappings",
            "QueryProductUserIdMappings",
            "VerifyIdToken",
          ],
        },
        "RateLimiter.AuthClient.SensitiveOperations": {
          MessageCount: 12,
          TimeIntervalInSeconds: 60.0,
          Operation: ["GenerateUserAuth"],
        },
        "RateLimiter.ReportsClient": {
          MessageCount: 100,
          TimeIntervalInSeconds: 60.0,
        },
      },
      services: {
        RTCService: {
          BaseUrl: "https://api.epicgames.dev/rtc",
        },
        DataStorageService: {
          BaseUrl: "https://api.epicgames.dev/datastorage",
        },
        AccountsEpicIdService: {
          BaseUrl: "https://api.epicgames.dev",
        },
        MetricsService: {
          BaseUrl: "https://api.epicgames.dev/datarouter",
        },
        EcommerceService: {
          BaseUrl:
            "https://ecommerceintegration-public-service-ecomprod02.ol.epicgames.com/ecommerceintegration",
        },
        KWSService: {
          BaseUrl: "https://api.epicgames.dev/kws",
        },
        AntiCheatService: {
          BaseUrl: "https://api.epicgames.dev/anticheat",
        },
        LobbyService: {
          BaseUrl: "https://api.epicgames.dev/lobby",
        },
        StatsAchievementsService: {
          BaseUrl: "https://api.epicgames.dev/stats",
        },
        PriceEngineService: {
          BaseUrl:
            "https://priceengine-public-service-ecomprod01.ol.epicgames.com/priceengine",
        },
        AccountsService: {
          BaseUrl: "https://egp-idsoc-proxy-prod.ol.epicgames.com/account",
          RedirectUrl: "accounts.epicgames.com",
        },
        EcommerceEpicIdService: {
          BaseUrl: "https://api.epicgames.dev/epic/ecom",
        },
        PaymentEpicIdService: {
          BaseUrl: "https://api.epicgames.dev/epic/payment",
        },
        SanctionsService: {
          BaseUrl: "https://api.epicgames.dev/sanctions",
        },
        FriendService: {
          BaseUrl: "https://egp-idsoc-proxy-prod.ol.epicgames.com/friends",
        },
        ReceiptValidatorService: {
          BaseUrl: "https://api.epicgames.dev/receipt-validator",
        },
        FriendEpicIdService: {
          BaseUrl: "https://api.epicgames.dev/epic/friends",
        },
        CatalogService: {
          BaseUrl:
            "https://catalog-public-service-prod06.ol.epicgames.com/catalog",
        },
        EOSAuthService: {
          BaseUrl: "https://api.epicgames.dev",
        },
        SessionsService: {
          BaseUrl: "https://api.epicgames.dev/matchmaking",
        },
        ModsService: {
          BaseUrl: "https://api.epicgames.dev/mods",
        },
        ReportsService: {
          BaseUrl: "https://api.epicgames.dev/player-reports",
        },
        ProgressionSnapshotService: {
          BaseUrl: "https://api.epicgames.dev/snapshots",
        },
        CustomInvitesService: {
          BaseUrl: "https://api.epicgames.dev/notifications",
        },
        PresenceService: {
          BaseUrl: "https://api.epicgames.dev/epic/presence",
        },
        TitleStorageService: {
          BaseUrl: "https://api.epicgames.dev/titlestorage",
        },
        StatsIngestService: {
          BaseUrl: "https://api.epicgames.dev/ingestion/stats",
        },
        LeaderboardsService: {
          BaseUrl: "https://api.epicgames.dev/leaderboards",
        },
        InventoryService: {
          BaseUrl: "https://api.epicgames.dev/inventory",
        },
      },
      watermark: -934553538,
    });
  });
}
