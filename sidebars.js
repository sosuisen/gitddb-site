/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  guideSidebar: [{ type: 'autogenerated', dirName: 'guide' }],

  tutorialSidebar: [{ type: 'autogenerated', dirName: 'tutorial' }],
  /*
  tutorialSidebar: ['intro',
    {
      type: 'category',
      label: 'Tutorial - Basics',
      items: [ { type: 'autogenerated', dirName: 'tutorial-basics'}]
    },
    {
      type: 'category',
      label: 'Tutorial - Extras',
      items: []
    },
  ],
  */
  // apiSidebar: [ { type: 'autogenerated', dirName: 'api'}],
  apiSidebar: [
    {
      type: 'category', label: 'GitDocumentDB', items: [
        'api/git-documentdb.gitdocumentdb',
        'api/git-documentdb.gitdocumentdb._constructor_',

        'api/git-documentdb.gitdocumentdb.open',
        'api/git-documentdb.gitdocumentdb.close',
        'api/git-documentdb.gitdocumentdb.destroy',

        {
          type: 'category', label: 'Put', items: [
            'api/git-documentdb.gitdocumentdb.put',
            'api/git-documentdb.gitdocumentdb.put_1',
            'api/git-documentdb.gitdocumentdb.putfatdoc',

            'api/git-documentdb.gitdocumentdb.insert',
            'api/git-documentdb.gitdocumentdb.insert_1',
            'api/git-documentdb.gitdocumentdb.insertfatdoc',

            'api/git-documentdb.gitdocumentdb.update',
            'api/git-documentdb.gitdocumentdb.update_1',
            'api/git-documentdb.gitdocumentdb.updatefatdoc',
          ]
        },

        {
          type: 'category', label: 'Get', items: [
            'api/git-documentdb.gitdocumentdb.get',

            'api/git-documentdb.gitdocumentdb.getfatdoc',
          ]
        },

        {
          type: 'category', label: 'Get back number', items: [
            'api/git-documentdb.gitdocumentdb.getbacknumber',
            'api/git-documentdb.gitdocumentdb.gethistory',

            'api/git-documentdb.gitdocumentdb.getfatdocbacknumber',
            'api/git-documentdb.gitdocumentdb.getfatdochistory',
          ]
        },

        {
          type: 'category', label: 'Delete', items: [
            'api/git-documentdb.gitdocumentdb.delete',
            'api/git-documentdb.gitdocumentdb.delete_1',

            'api/git-documentdb.gitdocumentdb.deletefatdoc',
          ]
        },

        {
          type: 'category', label: 'Search', items: [
            'api/git-documentdb.gitdocumentdb.find',
            'api/git-documentdb.gitdocumentdb.findfatdoc',
          ]
        },

        {
          type: 'category', label: 'Collection', items: [
            'api/git-documentdb.gitdocumentdb.collection',
            'api/git-documentdb.gitdocumentdb.getcollections',
            'api/git-documentdb.gitdocumentdb.rootcollection',
          ]
        },

        {
          type: 'category', label: 'Synchronization', items: [
            'api/git-documentdb.gitdocumentdb.sync',
            'api/git-documentdb.gitdocumentdb.sync_1',

            'api/git-documentdb.gitdocumentdb.onsyncevent',
            'api/git-documentdb.gitdocumentdb.onsyncevent_1',

            'api/git-documentdb.gitdocumentdb.offsyncevent',
            'api/git-documentdb.gitdocumentdb.offsyncevent_1',

            'api/git-documentdb.gitdocumentdb.getremoteurls',
            'api/git-documentdb.gitdocumentdb.getsync',
            'api/git-documentdb.gitdocumentdb.removesync',
          ]
        },

        {
          type: 'category', label: 'Author', items: [
            'api/git-documentdb.gitdocumentdb.author',
            'api/git-documentdb.gitdocumentdb.committer',
            'api/git-documentdb.gitdocumentdb.loadauthor',
            'api/git-documentdb.gitdocumentdb.saveauthor',
          ]
        },

        {
          type: 'category', label: 'Settings', items: [
            'api/git-documentdb.gitdocumentdb.loadappinfo',
            'api/git-documentdb.gitdocumentdb.saveappinfo',
          ]
        },

        {
          type: 'category', label: 'Properties', items: [
            'api/git-documentdb.gitdocumentdb.dbid',
            'api/git-documentdb.gitdocumentdb.dbname',
            'api/git-documentdb.gitdocumentdb.defaultbranch',
            'api/git-documentdb.gitdocumentdb.isopened',
            'api/git-documentdb.gitdocumentdb.isclosing',
            'api/git-documentdb.gitdocumentdb.localdir',
            'api/git-documentdb.gitdocumentdb.logger',
            'api/git-documentdb.gitdocumentdb.loglevel',
            'api/git-documentdb.gitdocumentdb.schema',
            'api/git-documentdb.gitdocumentdb.taskqueue',
            'api/git-documentdb.gitdocumentdb.validator',
            'api/git-documentdb.gitdocumentdb.workingdir'
          ]
        },

        {
          type: 'category', label: 'Low level methods', items: [
            'api/git-documentdb.gitdocumentdb.getcommit',

            'api/git-documentdb.gitdocumentdb.getdocbyoid',

            'api/git-documentdb.gitdocumentdb.repository',
            'api/git-documentdb.gitdocumentdb.setrepository',
          ]
        },

      ]
    },

    {
      type: 'category', label: 'Collection', items: [
        'api/git-documentdb.collection',
        'api/git-documentdb.collection._constructor_',

        {
          type: 'category', label: 'Put', items: [
            'api/git-documentdb.collection.put',
            'api/git-documentdb.collection.put_1',
            'api/git-documentdb.collection.putfatdoc',

            'api/git-documentdb.collection.insert',
            'api/git-documentdb.collection.insert_1',
            'api/git-documentdb.collection.insertfatdoc',

            'api/git-documentdb.collection.update',
            'api/git-documentdb.collection.update_1',
            'api/git-documentdb.collection.updatefatdoc',
          ]
        },

        {
          type: 'category', label: 'Get', items: [
            'api/git-documentdb.collection.get',

            'api/git-documentdb.collection.getfatdoc',
          ]
        },

        {
          type: 'category', label: 'Get back number', items: [
            'api/git-documentdb.collection.getbacknumber',
            'api/git-documentdb.collection.gethistory',

            'api/git-documentdb.collection.getfatdocbacknumber',
            'api/git-documentdb.collection.getfatdochistory',
          ]
        },

        {
          type: 'category', label: 'Delete', items: [
            'api/git-documentdb.collection.delete',
            'api/git-documentdb.collection.delete_1',

            'api/git-documentdb.collection.deletefatdoc',
          ]
        },

        {
          type: 'category', label: 'Search', items: [
            'api/git-documentdb.collection.find',
            'api/git-documentdb.collection.findfatdoc',
          ]
        },

        {
          type: 'category', label: 'Collection', items: [
            'api/git-documentdb.collection.collection',
            'api/git-documentdb.collection.getcollections',
          ]
        },

        {
          type: 'category', label: 'Synchronization', items: [
            'api/git-documentdb.collection.onsyncevent',
            'api/git-documentdb.collection.onsyncevent_1',

            'api/git-documentdb.collection.offsyncevent',
            'api/git-documentdb.collection.offsyncevent_1',
          ]
        },

        {
          type: 'category', label: 'Properties', items: [
            'api/git-documentdb.collection.collectionpath',
            'api/git-documentdb.collection.options',
            'api/git-documentdb.collection.parent',
          ]
        },

        {
          type: 'category', label: 'Low level methods', items: [
            'api/git-documentdb.collection.getdocbyoid',
            'api/git-documentdb.collection.generateid',
          ]
        },
      ]
    },

    {
      type: 'category', label: 'Sync', items: [
        'api/git-documentdb.sync',
        'api/git-documentdb.sync._constructor_',

        'api/git-documentdb.sync.pause',
        'api/git-documentdb.sync.resume',
        'api/git-documentdb.sync.close',

        {
          type: 'category', label: 'Sync manually', items: [
            'api/git-documentdb.sync.trypush',
            'api/git-documentdb.sync.trysync',
          ]
        },

        {
          type: 'category', label: 'Event', items: [
            'api/git-documentdb.sync.on',
            'api/git-documentdb.sync.off',
          ]
        },

        {
          type: 'category', label: 'Properties', items: [
            'api/git-documentdb.sync.credentialcallbacks',
            'api/git-documentdb.sync.jsondiff',
            'api/git-documentdb.sync.jsonpatch',
            'api/git-documentdb.sync.options',
            'api/git-documentdb.sync.remoteurl',
            'api/git-documentdb.sync.upstreambranch',
          ]
        },

        {
          type: 'category', label: 'Low level methods', items: [
            'api/git-documentdb.sync.currentretries',
            'api/git-documentdb.sync.enqueuepushtask',
            'api/git-documentdb.sync.enqueuesynctask',
            'api/git-documentdb.sync.init',
            'api/git-documentdb.sync.remoterepository',
          ]
        },
      ]
    },

    {
      type: 'category', label: 'TaskQueue', items: [
        'api/git-documentdb.taskqueue',
        'api/git-documentdb.taskqueue._constructor_',
        'api/git-documentdb.taskqueue.clear',
        'api/git-documentdb.taskqueue.currentstatistics',
        'api/git-documentdb.taskqueue.currenttaskid',
        'api/git-documentdb.taskqueue.getenqueuetime',
        'api/git-documentdb.taskqueue.length',
      ]
    },

    {
      type: 'category', label: 'RemoteRepository', items: [
        'api/git-documentdb.remoterepository',
        'api/git-documentdb.remoterepository._constructor_',
        'api/git-documentdb.remoterepository.connect',
        'api/git-documentdb.remoterepository.create',
        'api/git-documentdb.remoterepository.destroy',
      ]
    },

    {
      type: 'category', label: 'Validator', items: [
        'api/git-documentdb.validator',
        'api/git-documentdb.validator._constructor_',

        'api/git-documentdb.validator.bytelengthof',
        'api/git-documentdb.validator.maxcollectionpathlength',
        'api/git-documentdb.validator.maxidlength',
        'api/git-documentdb.validator.maxworkingdirectorylength',

        'api/git-documentdb.validator.normalizecollectionpath',
        'api/git-documentdb.validator.testwindowsinvalidfilenamecharacter',
        'api/git-documentdb.validator.testwindowsreservedfilename',
        'api/git-documentdb.validator.validatecollectionpath',
        'api/git-documentdb.validator.validatedbname',
        'api/git-documentdb.validator.validatedocument',
        'api/git-documentdb.validator.validateid',
        'api/git-documentdb.validator.validatelocaldir',
      ]
    },
    
    {
      type: 'category', label: 'Const', items: [
        'api/git-documentdb.database_creator',
        'api/git-documentdb.database_version',

        'api/git-documentdb.default_combine_db_strategy',
        'api/git-documentdb.default_conflict_resolution_strategy',
        'api/git-documentdb.default_local_dir',
        'api/git-documentdb.default_log_level',

        'api/git-documentdb.default_sync_interval',        

        'api/git-documentdb.duplicated_file_postfix',

        'api/git-documentdb.file_remove_timeout',

        'api/git-documentdb.first_commit_message',

        'api/git-documentdb.git_documentdb_app_info_id',
        'api/git-documentdb.git_documentdb_info_id',
        'api/git-documentdb.git_documentdb_metadata_dir',

        'api/git-documentdb.json_ext',

        'api/git-documentdb.max_file_path_length',

        'api/git-documentdb.minimum_sync_interval',
        'api/git-documentdb.network_retry_interval',
        'api/git-documentdb.network_retry',
        'api/git-documentdb.network_timeout',

        'api/git-documentdb.put_app_info_message',

        'api/git-documentdb.set_database_id_message',

        'api/git-documentdb.short_sha_length',        
      ]},

    {
      type: 'category', label: 'Type', items: [
        'api/git-documentdb.acceptedconflict',

        'api/git-documentdb.binarydocmetadata',

        'api/git-documentdb.changedfile',
        'api/git-documentdb.changedfiledelete',
        'api/git-documentdb.changedfileinsert',
        'api/git-documentdb.changedfileupdate',
        'api/git-documentdb.collectioninterface',
        'api/git-documentdb.collectionoptions',
        'api/git-documentdb.collectionpath',
        'api/git-documentdb.combinedbstrategies',
        'api/git-documentdb.conflictresolutionstrategies',
        'api/git-documentdb.conflictresolutionstrategylabels',
        'api/git-documentdb.connectionsettings',
        'api/git-documentdb.connectionsettingsgithub',
        'api/git-documentdb.connectionsettingsnone',
        'api/git-documentdb.connectionsettingsssh',
        
        'api/git-documentdb.databasecloseoption',
        'api/git-documentdb.databaseinfo',
        'api/git-documentdb.databaseopenresult',
        'api/git-documentdb.databaseoptions',
        'api/git-documentdb.deleteoptions',
        'api/git-documentdb.deleteresult',
        'api/git-documentdb.deleteresultbinary',
        'api/git-documentdb.deleteresultjsondoc',
        'api/git-documentdb.deleteresulttext',
        'api/git-documentdb.doc',
        'api/git-documentdb.docmetadata',
        'api/git-documentdb.doctype',
        'api/git-documentdb.duplicatedfile',

        'api/git-documentdb.fatbinarydoc',
        'api/git-documentdb.fatdoc',
        'api/git-documentdb.fatjsondoc',
        'api/git-documentdb.fattextdoc',
        'api/git-documentdb.findoptions',

        'api/git-documentdb.getoptions',
        
        'api/git-documentdb.historyfilter',
        'api/git-documentdb.historyoptions',

        'api/git-documentdb.icollection',

        'api/git-documentdb.jsondiffoptions',
        'api/git-documentdb.jsondoc',
        'api/git-documentdb.jsondocmetadata',

        'api/git-documentdb.normalizedcommit',

        'api/git-documentdb.openoptions',

        'api/git-documentdb.putoptions',
        'api/git-documentdb.putresult',
        'api/git-documentdb.putresultbinary',
        'api/git-documentdb.putresultjsondoc',
        'api/git-documentdb.putresulttext',

        'api/git-documentdb.remoteoptions',

        'api/git-documentdb.schema',
        'api/git-documentdb.synccallback',
        'api/git-documentdb.syncchangecallback',
        'api/git-documentdb.synccombinedatabasecallback',
        'api/git-documentdb.synccompletecallback',
        'api/git-documentdb.syncdirection',
        'api/git-documentdb.syncerrorcallback',
        'api/git-documentdb.syncevent',
        'api/git-documentdb.synceventinterface',
        'api/git-documentdb.synceventinterface.offsyncevent_1',
        'api/git-documentdb.synceventinterface.offsyncevent',
        'api/git-documentdb.synceventinterface.onsyncevent_1',
        'api/git-documentdb.synceventinterface.onsyncevent',
        'api/git-documentdb.syncinterface.close',
        'api/git-documentdb.syncinterface.credentialcallbacks',
        'api/git-documentdb.syncinterface.currentretries',
        'api/git-documentdb.syncinterface.enqueuepushtask',
        'api/git-documentdb.syncinterface.enqueuesynctask',
        'api/git-documentdb.syncinterface.init',
        'api/git-documentdb.syncinterface.jsondiff',
        'api/git-documentdb.syncinterface.jsonpatch',
        'api/git-documentdb.syncinterface',
        'api/git-documentdb.syncinterface.off',
        'api/git-documentdb.syncinterface.on',
        'api/git-documentdb.syncinterface.options',
        'api/git-documentdb.syncinterface.pause',
        'api/git-documentdb.syncinterface.remoterepository',
        'api/git-documentdb.syncinterface.remoteurl',
        'api/git-documentdb.syncinterface.resume',
        'api/git-documentdb.syncinterface.trypush',
        'api/git-documentdb.syncinterface.trysync',
        'api/git-documentdb.syncinterface.upstreambranch',
        'api/git-documentdb.synclocalchangecallback',
        'api/git-documentdb.syncpausecallback',
        'api/git-documentdb.syncremotechangecallback',
        'api/git-documentdb.syncresult',
        'api/git-documentdb.syncresultcancel',
        'api/git-documentdb.syncresultcombinedatabase',
        'api/git-documentdb.syncresultfastforwardmerge',
        'api/git-documentdb.syncresultmergeandpush',
        'api/git-documentdb.syncresultmergeandpusherror',
        'api/git-documentdb.syncresultnop',
        'api/git-documentdb.syncresultpush',
        'api/git-documentdb.syncresultresolveconflictsandpush',
        'api/git-documentdb.syncresultresolveconflictsandpusherror',
        'api/git-documentdb.syncresumecallback',
        'api/git-documentdb.syncstartcallback',

        'api/git-documentdb.tasklabel',
        'api/git-documentdb.taskmetadata',
        'api/git-documentdb.taskstatistics',
        'api/git-documentdb.textdocmetadata',

        'api/git-documentdb.writeoperation',
      ]
    },

    {
      type: 'category', label: 'Error', items: [
        'api/git-documentdb.err',
        'api/git-documentdb.err.baseerror',

        'api/git-documentdb.err.authenticationtypenotallowcreaterepositoryerror',
        'api/git-documentdb.err.cannotconnecterror',
        'api/git-documentdb.err.cannotconnecterror.retry',
        'api/git-documentdb.err.cannotcreatedirectoryerror',
        'api/git-documentdb.err.cannotcreateremoterepositoryerror',
        'api/git-documentdb.err.cannotcreaterepositoryerror',
        'api/git-documentdb.err.cannotdeletedataerror',
        'api/git-documentdb.err.cannotopenrepositoryerror',
        'api/git-documentdb.err.cannotwritedataerror',
        'api/git-documentdb.err.combinedatabaseerror',
        'api/git-documentdb.err.consecutivesyncskippederror',
        'api/git-documentdb.err.databaseclosetimeouterror',
        'api/git-documentdb.err.databaseclosingerror',
        'api/git-documentdb.err.documentnotfounderror',
        'api/git-documentdb.err.fetchconnectionfailederror',
        'api/git-documentdb.err.fetchpermissiondeniederror',
        'api/git-documentdb.err.fileremovetimeouterror',
        'api/git-documentdb.err.gitmergebrancherror',
        'api/git-documentdb.err.gitpusherror',
        'api/git-documentdb.err.httpnetworkerror',
        'api/git-documentdb.err.httpprotocolrequirederror',
        'api/git-documentdb.err.intervaltoosmallerror',
        'api/git-documentdb.err.invalidauthenticationtypeerror',
        'api/git-documentdb.err.invalidcollectionpathcharactererror',
        'api/git-documentdb.err.invalidcollectionpathlengtherror',
        'api/git-documentdb.err.invalidconflictstateerror',
        'api/git-documentdb.err.invaliddbnamecharactererror',
        'api/git-documentdb.err.invaliddoctypeerror',
        'api/git-documentdb.err.invalididcharactererror',
        'api/git-documentdb.err.invalididlengtherror',
        'api/git-documentdb.err.invalidjsonfileextensionerror',
        'api/git-documentdb.err.invalidjsonobjecterror',
        'api/git-documentdb.err.invalidlocaldircharactererror',
        'api/git-documentdb.err.invalidrepositoryurlerror',
        'api/git-documentdb.err.invalidsshkeypatherror',
        'api/git-documentdb.err.invalidurlerror',
        'api/git-documentdb.err.invalidworkingdirectorypathlengtherror',
        'api/git-documentdb.err.nomergebasefounderror',
        'api/git-documentdb.err.personalaccesstokenforanotheraccounterror',
        'api/git-documentdb.err.pushconnectionfailederror',
        'api/git-documentdb.err.pushnotallowederror',
        'api/git-documentdb.err.pushpermissiondeniederror',
        'api/git-documentdb.err.pushworkererror',
        'api/git-documentdb.err.remotealreadyregisterederror',
        'api/git-documentdb.err.remoterepositoryconnecterror',
        'api/git-documentdb.err.remoterepositorynotfounderror',
        'api/git-documentdb.err.repositorynotfounderror',
        'api/git-documentdb.err.repositorynotopenerror',
        'api/git-documentdb.err.requesttimeouterror',
        'api/git-documentdb.err.sameidexistserror',
        'api/git-documentdb.err.sockettimeouterror',
        'api/git-documentdb.err.syncintervallessthanorequaltoretryintervalerror',
        'api/git-documentdb.err.syncworkererror',
        'api/git-documentdb.err.syncworkerfetcherror',
        'api/git-documentdb.err.taskcancelerror',
        'api/git-documentdb.err.threewaymergeerror',
        'api/git-documentdb.err.undefineddatabasenameerror',
        'api/git-documentdb.err.undefineddberror',
        'api/git-documentdb.err.undefineddocumentiderror',
        'api/git-documentdb.err.undefinedpersonalaccesstokenerror',
        'api/git-documentdb.err.undefinedremoteurlerror',
        'api/git-documentdb.err.undefinedsyncerror',
        'api/git-documentdb.err.unfetchedcommitexistserror',
      ]
    },
    
    'api/index',
    'api/git-documentdb',
  ],
  // But you can create a sidebar manually

  /*  tutorialSidebar: [
      {
        type: 'category',
        label: 'Tutorial',
        items: ['hello'],
      },
    ],*/
};
